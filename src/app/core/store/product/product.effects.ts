import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoginSuccess,
  FormLoginActionsTypes,
  LoginSuccessPayload
} from '../login/login.actions';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
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

@Injectable()
export class ProductsPageEffects {
  @Effect()
  loadProducts = this.actions$.pipe(
    ofType<ProductActions.LoadProducts>(ProductActionTypes.LOAD_PRODUCTS),
    switchMap(() =>
      this.productService.getAll().pipe(
        map((res: Product[]) => {
          let productStates = [];
          res.forEach(product=> productStates.push(new ProductState(product,false)))
          return new LoadProductsSuccess(productStates);
        }),
        catchError((err: HttpErrorResponse) => of(new LoadProductsFailure(err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
