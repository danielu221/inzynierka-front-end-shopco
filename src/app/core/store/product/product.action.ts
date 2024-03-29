import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/interface/product.interface';
import { ProductState } from './ProductState';

export enum ProductActionTypes {
  ADD = '[Product] Add to list',
  REMOVE = '[Product] Remove from list',
  LOAD_PRODUCTS = '[Products] Load products from server',
  LOAD_SUCCESS = '[Products] Load success',
  LOAD_FAILURE = '[Products] Load failed',
  UPDATE_QUANTITY_IN_CART = '[CartItem] Update Quantity',
  SAVE_CART = '[Cart] Save cart',
  SAVE_CART_SUCCESS = '[Cart] Save cart success',
  SAVE_CART_FAILURE = '[Cart] Save cart failed',
  SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER = '[Cart] Save current and redirect to order',
  SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER_SUCCESS = '[Cart] Save current and redirect to order success',
  SEARCH_FOR_PRODUCT = '[Products]  search for products',
  SEARCH_FOR_PRODUCT_SUCCESS = '[Products] search for products success',
  SEARCH_FOR_PRODUCT_FAILURE = '[Products] search for products failure'
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

export class UpdateQuantityInCart implements Action {
  readonly type = ProductActionTypes.UPDATE_QUANTITY_IN_CART;

  constructor(
    public payload: {
      cartItemId: number;
      updatedQuantity: number;
    }
  ) {}
}

export class SaveCart implements Action {
  readonly type = ProductActionTypes.SAVE_CART;

  constructor(public payload: { listName: string; dialogRef: any }) {}
}

export class SaveCartSuccess implements Action {
  readonly type = ProductActionTypes.SAVE_CART_SUCCESS;
}

export class SaveCartFailure implements Action {
  readonly type = ProductActionTypes.SAVE_CART_FAILURE;

  constructor(public payload: any) {}
}

export class SaveCurrentCartAndRedirectToOrder implements Action {
  readonly type = ProductActionTypes.SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER;

  constructor(public payload: { listName: string; dialogRef: any }) {}
}

export class SaveCurrentCartAndRedirectToOrderSuccess implements Action {
  readonly type =
    ProductActionTypes.SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER_SUCCESS;

  constructor(
    public payload: {
      cartId: number;
      cartName: string;
      totalItemsPrice: number;
      cartItems: any;
    }
  ) {}
}

export class SearchForProduct implements Action {
  readonly type = ProductActionTypes.SEARCH_FOR_PRODUCT;

  constructor(public payload: { searchValue: string }) {}
}

export class SearchForProductSuccess implements Action {
  readonly type = ProductActionTypes.SEARCH_FOR_PRODUCT_SUCCESS;
  constructor(public payload: ProductState[]) {}
}

export class SearchForProductFailure implements Action {
  readonly type = ProductActionTypes.SEARCH_FOR_PRODUCT_FAILURE;

  constructor(public payload: any) {}
}

export type ProductActions =
  | AddToList
  | RemoveFromList
  | LoadProductsSuccess
  | LoadProducts
  | LoadProductsFailure
  | UpdateQuantityInCart
  | SaveCart
  | SaveCartFailure
  | SaveCartSuccess
  | SaveCurrentCartAndRedirectToOrder
  | SaveCurrentCartAndRedirectToOrderSuccess
  | SearchForProduct
  | SearchForProductSuccess
  | SearchForProductFailure;
