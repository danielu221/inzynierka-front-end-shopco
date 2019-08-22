import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/interface/product.interface';

export enum ProductActionTypes {
  ADD = '[Product] Add to cart',
  REMOVE = '[Product] Remove from cart',
  LOAD_PRODUCTS = '[Products] Load products from server',
  LOAD_SUCCESS = '[Products] Load success',
  LOAD_FAILURE = '[Products] Load failed'
}

export class AddToCart implements Action {
  readonly type = ProductActionTypes.ADD;

  constructor(public payload: Product) {}
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class RemoveFromCart implements Action {
  readonly type = ProductActionTypes.REMOVE;

  constructor(public payload: Product) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class LoadProductsFailure implements Action {
  readonly type = ProductActionTypes.LOAD_FAILURE;

  constructor(public payload: any) {}
}


export type ProductActions = AddToCart | RemoveFromCart | LoadProductsSuccess | LoadProducts | LoadProductsFailure; 