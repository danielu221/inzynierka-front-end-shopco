import { Action } from '@ngrx/store';
import { Order } from 'src/app/shared/interface/order.interface';
import { Cart } from 'src/app/shared/interface/cart.interface';
import { Product } from 'src/app/shared/interface/product.interface';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';

export enum OrderActionTypes {
  PUBLISH_ORDER = '[Order] Publish order',
  SUBMIT_ORDER_FORM = '[Order] submit form',
  PUBLISH_ORDER_SUCCESS = '[Order] publish success',
  PUBLISH_ORDER_FAILURE = '[Order] publish failed',
  GET_MY_ORDERS = '[Order] get all',
  GET_MY_ORDERS_SUCCESS = '[Order] get success',
  GET_MY_ORDERS_FAILURE = '[Order] get failure'
}

export interface PublishOrderRequestBody {
  dispositionDeliveryAddress: string;
  listId: number;
  creationDatetime: string;
  deliveryDatetime: string;
  asap: boolean;
}

export interface GetMyOrdersResponseObj {
  dispositionDeliveryAddress: string;
  listOfItems: {
    listName:string;
    creationDate:string;
    items:any[];
    id:number;
    totalItemsPrice:number;
  };
  lat: string;
  lng: string;
  creationDatetime: string;
  deliveryDatetime: string;
  asap: boolean;
  id: number;
  code: string;
  dispositionStatus: {
    id: number;
    dispositionStatusName: string;
  };
}

export class PublishOrder implements Action {
  readonly type = OrderActionTypes.PUBLISH_ORDER;
  constructor(public payload: PublishOrderRequestBody) {}
}

export class PublishOrderSuccess implements Action {
  readonly type = OrderActionTypes.PUBLISH_ORDER_SUCCESS;
  constructor(public payload: any) {}
}

export class PublishOrderFailure implements Action {
  readonly type = OrderActionTypes.PUBLISH_ORDER_FAILURE;
  constructor(public payload: any) {}
}

export class GetMyOrders implements Action {
  readonly type = OrderActionTypes.GET_MY_ORDERS;
  constructor() {}
}

export class GetMyOrdersSuccess implements Action {
  readonly type = OrderActionTypes.GET_MY_ORDERS_SUCCESS;
  constructor(public payload: {myOrders:Order[]}) {}
}

export class GetMyOrdersFailure implements Action {
  readonly type = OrderActionTypes.GET_MY_ORDERS_FAILURE;
  constructor(public payload: any) {}
}

// export class SubmitOrderFormAction implements Action {
//   readonly type = OrderActionTypes.SUBMIT_ORDER_FORM;
//   constructor(public payload: SaveOrderRequestBody) {}
// }

export type OrderActions =
  | PublishOrder
  | PublishOrderSuccess
  | PublishOrderFailure
  | GetMyOrders
  | GetMyOrdersSuccess
  | GetMyOrdersFailure;
