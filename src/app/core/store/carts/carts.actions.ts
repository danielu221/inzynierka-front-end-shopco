import { Action } from '@ngrx/store';
import { Cart } from 'src/app/shared/interface/cart.interface';

export enum CartsActionTypes {
  LOAD_CARTS = '[Carts] Load carts from server',
  LOAD_SUCCESS = '[Carts] Load success',
  LOAD_FAILURE = '[Carts] Load failed',
  REMOVE_FROM_CART = '[CartItem] Remove',
  REMOVE_CART = '[Cart] Remove',
  REMOVE_CART_SUCCESS = '[Cart] Remove success',
  REMOVE_CART_FAILURE = '[Cart] Remove failure',
  UPDATE_QUANTITY_IN_CART_PREVIEW = '[Cart] Update quantity'
}

export class LoadCarts implements Action {
  readonly type = CartsActionTypes.LOAD_CARTS;
  constructor(public payload: {userId:number}) {}
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
  constructor(public payload: {id:number}) {}
}

export class RemoveCart implements Action {
  readonly type = CartsActionTypes.REMOVE_CART;
  constructor(public payload: {id:number}) {}
}

export class RemoveCartSuccess implements Action {
  readonly type = CartsActionTypes.REMOVE_CART_SUCCESS;
  constructor(public payload:any) {}
}

export class RemoveCartFailure implements Action {
  readonly type = CartsActionTypes.REMOVE_CART_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateQuantityInCartPreview implements Action{
  readonly type = CartsActionTypes.UPDATE_QUANTITY_IN_CART_PREVIEW;
  constructor(public payload: any) {}
}

export type CartsActions = LoadCarts | LoadCartsSuccess | LoadCartsFailure | RemoveCart | RemoveCartSuccess | RemoveCartFailure | UpdateQuantityInCartPreview;
