import { Action } from '@ngrx/store';
import { Cart } from 'src/app/shared/interface/cart.interface';

export enum CartsActionTypes {
  LOAD_CARTS = '[Carts] Load carts from server',
  LOAD_SUCCESS = '[Carts] Load success',
  LOAD_FAILURE = '[Carts] Load failed'
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

export type CartsActions = LoadCarts | LoadCartsSuccess | LoadCartsFailure;
