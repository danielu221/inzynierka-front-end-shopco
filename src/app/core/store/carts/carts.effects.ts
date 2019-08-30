import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CartsActionTypes } from './carts.actions';
import {
  switchMap,
  map,
  catchError,
  mergeMap,
  withLatestFrom
} from 'rxjs/operators';

import * as CartsActions from './carts.actions';
import { Store } from '@ngrx/store';
import { State } from '../root-state';
import { CartsService } from './carts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { Product } from 'src/app/shared/interface/product.interface';
import { Cart } from 'src/app/shared/interface/cart.interface';
import { ToastConfig } from 'src/app/shared/interface/toast-config.interface';
import { MatDialog } from '@angular/material/dialog';
import { PublishCartModalComponent } from 'src/app/shared/components/publish-cart-modal/publish-cart-modal.component';

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
                  cartItemId: cartResItem.id,
                  ...cartResItem.product
                };
              })
            };
          });
          return new CartsActions.LoadCartsSuccess(carts);
        }),
        catchError((err: HttpErrorResponse) =>
          of(new CartsActions.LoadCartsFailure(err))
        )
      )
    )
  );

  @Effect()
  removeCart = this.actions$.pipe(
    ofType<CartsActions.RemoveCart>(CartsActionTypes.REMOVE_CART),
    switchMap(action =>
      this.cartsService.removeCart(action.payload.id).pipe(
        map((res: any) => {
          console.log(res);
          const toast: ToastConfig = {
            title: 'Pomyślnie usunięto listę'
          };
          this.toasterService.showSuccessMessage(toast);
          return new CartsActions.RemoveCartSuccess(res);
        }),
        catchError((err: HttpErrorResponse) => {
          const toast: ToastConfig = {
            title: 'Błąd podczas usuwania listy',
            body: `Kod błędu: ${err.status}`
          };
          this.toasterService.showErrorMessage(toast);
          return of(new CartsActions.RemoveCartFailure(err));
        })
      )
    )
  );

  @Effect()
  removeFromCart = this.actions$.pipe(
    ofType<CartsActions.RemoveFromCart>(CartsActionTypes.REMOVE_FROM_CART),
    switchMap(action =>
      this.cartsService
        .removeItemFromCart(action.payload.cartId, action.payload.cartItemId)
        .pipe(
          map((res: any) => {
            console.log(res);
            const toast: ToastConfig = {
              title: 'Pomyślnie usunięto przedmiot z listy'
            };
            this.toasterService.showSuccessMessage(toast);
            return new CartsActions.RemoveFromCartSuccess(res);
          }),
          catchError((err: HttpErrorResponse) => {
            const toast: ToastConfig = {
              title: 'Błąd podczas usuwania przedmiotu',
              body: `Kod błędu: ${err.status}`
            };
            this.toasterService.showErrorMessage(toast);
            return of(new CartsActions.RemoveFromCartFailure(err));
          })
        )
    )
  );

  @Effect()
  updateCart = this.actions$.pipe(
    ofType<CartsActions.UpdateCart>(CartsActionTypes.UPDATE_CART),
    withLatestFrom(this.store$),
    mergeMap(([action, store]) => {
      return this.cartsService
        .updateCart(
          action.payload.cartId,
          this.getCartItemsFromStore(store, action.payload.cartId),
          action.payload.cartName
        )
        .pipe(
          map((res: any) => {
            const toast: ToastConfig = {
              title: 'Lista pomyślnie zapisana'
            };
            this.toasterService.showSuccessMessage(toast);
            action.payload.dialogRef.close();
            return new CartsActions.UpdateCartSuccess({
              cartId: action.payload.cartId,
              cartName: action.payload.cartName
            });
          }),
          catchError((err: HttpErrorResponse) => {
            const toast: ToastConfig = {
              title: 'Błąd z wysłaniem żądania',
              body: `Kod błędu: ${err.status}`
            };
            this.toasterService.showErrorMessage(toast);
            return of(new CartsActions.UpdateCartFailure(err));
          })
        );
    })
  );

  getCartItemsFromStore(store: State, cartId: number) {
    return store.cartsPageState.carts.filter(cart => cart.id === cartId)[0]
      .cartItems;
  }

  constructor(
    private actions$: Actions,
    private cartsService: CartsService,
    private store$: Store<State>,
    private toasterService: ToastMessageService,
    public dialog: MatDialog
  ) {}
}
