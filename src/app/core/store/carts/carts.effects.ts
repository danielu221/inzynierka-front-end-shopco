import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CartsActionTypes } from './carts.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as CartsActions from './carts.actions';
import { Store } from '@ngrx/store';
import { State } from '../root-state';
import { CartsService } from './carts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { Product } from 'src/app/shared/interface/product.interface';
import { Cart } from 'src/app/shared/interface/cart.interface';

interface CartResponse {
  creationDate: string;
  id: number;
  items: CartItemResponse[];
  listName: string;
  totalItemsPrice: number;
}

interface CartItemResponse {
  id: number;
  product: Product;
  product_units: number;
  totalItemPrice: number;
}

@Injectable()
export class CartsPageEffects {
  @Effect()
  loadProducts = this.actions$.pipe(
    ofType<CartsActions.LoadCarts>(CartsActionTypes.LOAD_CARTS),
    switchMap(action =>
      this.cartsService.getAll(action.payload.userId).pipe(
        map((res: CartResponse[]) => {
          console.log(res);
          let carts: Cart[];
          carts = res.map(cartRes => {
            return {
              cartName: cartRes.listName,
              id: cartRes.id,
              totalItemsPrice: cartRes.totalItemsPrice,
              cartItems: cartRes.items.map(cartResItem => {
                return {
                  quantity: cartResItem.product_units,
                  totalPrice: cartResItem.totalItemPrice,
                  ...cartResItem.product
                };
              })
            };
          });
          console.log(carts)
          return new CartsActions.LoadCartsSuccess(carts);
        }),
        catchError((err: HttpErrorResponse) =>
          of(new CartsActions.LoadCartsFailure(err))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cartsService: CartsService,
    private store$: Store<State>,
    private toasterService: ToastMessageService
  ) {}
}
