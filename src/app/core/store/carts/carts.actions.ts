import { Action } from '@ngrx/store';
import { Cart } from 'src/app/shared/interface/cart.interface';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { MatDialogRef } from '@angular/material/dialog';

export enum CartsActionTypes {
  LOAD_CARTS = '[Carts] Load carts from server',
  LOAD_SUCCESS = '[Carts] Load success',
  LOAD_FAILURE = '[Carts] Load failed',
  REMOVE_FROM_CART = '[CartItem] Remove',
  REMOVE_CART = '[Cart] Remove',
  REMOVE_CART_SUCCESS = '[Cart] Remove success',
  REMOVE_CART_FAILURE = '[Cart] Remove failure',
  UPDATE_QUANTITY_IN_CART_PREVIEW = '[Cart] Update quantity',
  REMOVE_FROM_CART_SUCCESS = '[Cart] remove item success',
  REMOVE_FROM_CART_FAILURE = '[Cart] remove item failure',
  UPDATE_CART = '[Cart] Update',
  UPDATE_CART_SUCCESS = '[Cart] Update success',
  UPDATE_CART_FAILURE = '[Cart] Update failure',
  SAVE_CART_AND_REDIRECT_TO_ORDER = '[Cart] Save and redirect',
  SAVE_CART_AND_REDIRECT_TO_ORDER_SUCCESS ='[Cart] Save and redirect success',
  OPEN_CART_DIALOG = '[Cart] open dialog'
}

export class LoadCarts implements Action {
  readonly type = CartsActionTypes.LOAD_CARTS;
  constructor(public payload: { userId: number }) {}
}

export class LoadCartsSuccess implements Action {
  readonly type = CartsActionTypes.LOAD_SUCCESS;
  constructor(public payload: Cart[]) {}
}

export class LoadCartsFailure implements Action {
  readonly type = CartsActionTypes.LOAD_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveFromCart implements Action {
  readonly type = CartsActionTypes.REMOVE_FROM_CART;
  constructor(public payload: { cartId: number; cartItemId: number }) {}
}

export class RemoveFromCartSuccess implements Action {
  readonly type = CartsActionTypes.REMOVE_FROM_CART_SUCCESS;
  constructor(public payload: any) {}
}

export class RemoveFromCartFailure implements Action {
  readonly type = CartsActionTypes.REMOVE_FROM_CART_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveCart implements Action {
  readonly type = CartsActionTypes.REMOVE_CART;
  constructor(public payload: { id: number }) {}
}

export class RemoveCartSuccess implements Action {
  readonly type = CartsActionTypes.REMOVE_CART_SUCCESS;
  constructor(public payload: any) {}
}

export class RemoveCartFailure implements Action {
  readonly type = CartsActionTypes.REMOVE_CART_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateQuantityInCartPreview implements Action {
  readonly type = CartsActionTypes.UPDATE_QUANTITY_IN_CART_PREVIEW;
  constructor(public payload: any) {}
}

export class UpdateCart implements Action {
  readonly type = CartsActionTypes.UPDATE_CART;
  constructor(public payload: { cartId: number, dialogRef: any, cartName:string }) {}
}

export class UpdateCartSuccess implements Action {
  readonly type = CartsActionTypes.UPDATE_CART_SUCCESS;
  constructor(public payload:  { cartId: number,cartName:string }) {}
}

export class UpdateCartFailure implements Action {
  readonly type = CartsActionTypes.UPDATE_CART_FAILURE;
  constructor(public payload: any) {}
}

export class SaveCartAndRedirectToOrder implements Action {
  readonly type = CartsActionTypes.SAVE_CART_AND_REDIRECT_TO_ORDER;
  constructor(public payload: { cartId: number, dialogRef: any, cartName:string }) {}
}

export class SaveCartAndRedirectToOrderSuccess implements Action {
  readonly type = CartsActionTypes.SAVE_CART_AND_REDIRECT_TO_ORDER_SUCCESS;
  constructor(public payload: { cartId: number,cartName:string}) {}
}

export class OpenCartDialog implements Action {
  readonly type = CartsActionTypes.OPEN_CART_DIALOG;
  constructor(public payload: { cartId: number }) {}
}

export type CartsActions =
  | LoadCarts
  | LoadCartsSuccess
  | LoadCartsFailure
  | RemoveCart
  | RemoveCartSuccess
  | RemoveCartFailure
  | UpdateQuantityInCartPreview
  | RemoveFromCart
  | RemoveFromCartFailure
  | RemoveCartSuccess
  | UpdateCart
  | UpdateCartFailure
  | UpdateCartSuccess
  | SaveCartAndRedirectToOrder
  | SaveCartAndRedirectToOrderSuccess
  | OpenCartDialog;
