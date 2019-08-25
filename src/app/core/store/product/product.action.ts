import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/interface/product.interface';
import { ProductState } from './ProductState';

export enum ProductActionTypes {
  ADD = '[Product] Add to list',
  REMOVE = '[Product] Remove from list',
  LOAD_PRODUCTS = '[Products] Load products from server',
  LOAD_SUCCESS = '[Products] Load success',
  LOAD_FAILURE = '[Products] Load failed'
}

export class AddToList implements Action {
  readonly type = ProductActionTypes.ADD;

  constructor(public payload: Product) {}
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class RemoveFromList implements Action {
  readonly type = ProductActionTypes.REMOVE;

  constructor(public payload: Product) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_SUCCESS;

  constructor(public payload: ProductState[]) {}
}

export class LoadProductsFailure implements Action {
  readonly type = ProductActionTypes.LOAD_FAILURE;

  constructor(public payload: any) {}
}


export type ProductActions = AddToList | RemoveFromList | LoadProductsSuccess | LoadProducts | LoadProductsFailure; 