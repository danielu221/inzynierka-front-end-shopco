import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoginSuccess,
  FormLoginActionsTypes,
  LoginSuccessPayload
} from '../login/login.actions';
import {
  map,
  tap,
  switchMap,
  catchError,
  withLatestFrom,
  mergeMap
} from 'rxjs/operators';
import {
  STORAGE_TOKEN,
  STORAGE_USER
} from 'src/app/shared/variables/local-storage.variables';
import {
  ProductActionTypes,
  LoadProductsSuccess,
  LoadProductsFailure
} from './product.action';

import * as ProductActions from './product.action';
import { Product } from 'src/app/shared/interface/product.interface';
import { ProductService } from './product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ProductState } from './ProductState';
import { Store } from '@ngrx/store';
import { ProductsPageState } from './product.reducer';
import { State } from '../root-state';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CartInProductsComponent } from 'src/app/modules/products-list/components/cart/cart.component';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { ToastConfig } from 'src/app/shared/interface/toast-config.interface';
import { PublishCartModalComponent } from 'src/app/shared/components/publish-cart-modal/publish-cart-modal.component';

import * as OrderActions from '../order/order.action';

import * as CartsActions from '../carts/carts.actions';
import { CartPreviewComponent } from 'src/app/modules/carts/components/cart-preview/cart-preview.component';
import { CartsActionTypes } from '../carts/carts.actions';

@Injectable()
export class ProductsPageEffects {
  @Effect()
  loadProducts = this.actions$.pipe(
    ofType<ProductActions.LoadProducts>(ProductActionTypes.LOAD_PRODUCTS),
    switchMap(() =>
      this.productService.getAll().pipe(
        map((res: Product[]) => {
          let productStates = [];
          res.forEach(product =>
            productStates.push(new ProductState(product, false))
          );
          return new LoadProductsSuccess(productStates);
        }),
        catchError((err: HttpErrorResponse) => of(new LoadProductsFailure(err)))
      )
    )
  );

  @Effect()
  saveCart = this.actions$.pipe(
    ofType<
      ProductActions.SaveCart | ProductActions.SaveCurrentCartAndRedirectToOrder
    >(
      ProductActionTypes.SAVE_CART,
      ProductActionTypes.SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER
    ),
    withLatestFrom(this.store$),
    mergeMap(([action, store]) => {
      return this.productService
        .saveCart(action.payload.listName, store.productsPageState.cartItems)
        .pipe(
          map((res: any) => {
            const toast: ToastConfig = {
              title: 'Lista pomyślnie zapisana'
            };
            this.toasterService.showSuccessMessage(toast);
            action.payload.dialogRef.close();
            if (
              action.type ===
              ProductActionTypes.SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER
            ) 
            {
              this.dialog.open(PublishCartModalComponent, {
                width: '800px',
                height: '650px'
              });
              return new ProductActions.SaveCurrentCartAndRedirectToOrderSuccess(
                {
                  cartId: res.id,
                  cartName: res.listName,
                  totalItemsPrice: res.totalItemsPrice
                }
              );
            }
            return new ProductActions.SaveCartSuccess();
          }),
          catchError((err: HttpErrorResponse) => {
            const toast: ToastConfig = {
              title: 'Błąd z wysłaniem żądania',
              body: `Kod błędu: ${err.status}`
            };
            this.toasterService.showErrorMessage(toast);
            return of(new ProductActions.SaveCartFailure(err));
          })
        );
    })
  );


  // @Effect({dispatch: false})
  // openOrderDialog = this.actions$.pipe(
  //   ofType<CartsActions.OpenCartDialog>(
  //     CartsActionTypes.OPEN_CART_DIALOG
  //   ),
  //   tap((action) => {
  //     this.dialog.closeAll();
  //     this.dialog.open(CartPreviewComponent, {
  //       width: '800px',
  //       height: '650px',  
  //       data: {cartId:action.payload.cartId}
  //   })
  // }));

  @Effect({dispatch: false})
  closeOrderDialog = this.actions$.pipe(
    ofType<OrderActions.PublishOrderSuccess>(
      OrderActions.OrderActionTypes.PUBLISH_ORDER_SUCCESS
    ),
    tap(() => {
      this.dialog.closeAll();
  }));

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store$: Store<State>,
    private toasterService: ToastMessageService,
    private dialog: MatDialog
  ) {}
}
