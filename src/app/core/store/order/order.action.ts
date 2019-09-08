import { Action } from '@ngrx/store';
import { Order } from 'src/app/shared/interface/order.interface';
import { Cart } from 'src/app/shared/interface/cart.interface';
import { Product } from 'src/app/shared/interface/product.interface';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { User } from 'src/app/shared/interface/user.interface';

export enum OrderActionTypes {
  PUBLISH_ORDER = '[Order] Publish order',
  SUBMIT_ORDER_FORM = '[Order] submit form',
  PUBLISH_ORDER_SUCCESS = '[Order] publish success',
  PUBLISH_ORDER_FAILURE = '[Order] publish failed',
  GET_MY_ORDERS = '[Order] get all',
  GET_MY_ORDERS_SUCCESS = '[Order] get success',
  GET_MY_ORDERS_FAILURE = '[Order] get failure',
  GET_ORDERS_TO_TAKE = '[Order] get all orders to take',
  GET_ORDERS_TO_TAKE_SUCCESS = '[Order] get orderst to take success',
  GET_ORDERS_TO_TAKE_FAILURE = '[Order] get orders to take failure',
  TAKE_ORDER_SUCCESS = '[Order] Take order success',
  TAKE_ORDER = '[Order] Take order',
  TAKE_ORDER_FAILURE = '[Order] Take order failure',
  GET_TAKEN_ORDERS = '[Order] get taken orders',
  GET_TAKEN_ORDERS_SUCCESS = '[Order] get taken orders success',
  GET_TAKEN_ORDERS_FAILURE = '[Order] get taken orders faiure'
}

export interface PublishOrderRequestBody {
  dispositionDeliveryAddress: string;
  listId: number;
  creationDatetime: string;
  deliveryDatetime: string;
  asap: boolean;
}

export interface MyOrderResponseObj {
  dispositionDeliveryAddress: string;
  listOfItems: {
    listName: string;
    creationDate: string;
    items: any[];
    id: number;
    totalItemsPrice: number;
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
  principal: User;
  mandatory: User;
}

export interface OrderToTakeResponseObj {
  dispositionDeliveryAddress: string;
  listOfItems: {
    listName: string;
    creationDate: string;
    items: any[];
    id: number;
    totalItemsPrice: number;
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
  principal: User;
  mandatory: User;
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
  constructor(public payload: { myOrders: Order[] }) {}
}

export class GetMyOrdersFailure implements Action {
  readonly type = OrderActionTypes.GET_MY_ORDERS_FAILURE;
  constructor(public payload: any) {}
}

export class GetOrdersToTake implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_TO_TAKE;
  constructor() {}
}

export class GetOrdersToTakeSuccess implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_TO_TAKE_SUCCESS;
  constructor(public payload: { ordersToTake: Order[] }) {}
}

export class GetOrdersToTakeFailure implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_TO_TAKE_FAILURE;
  constructor(public payload: any) {}
}

export class TakeOrder implements Action {
  readonly type = OrderActionTypes.TAKE_ORDER;
  constructor(public payload: { orderId: number }) {}
}

export class TakeOrderSuccess implements Action {
  readonly type = OrderActionTypes.TAKE_ORDER_SUCCESS;
  constructor(public payload: { orderId: number }) {}
}

export class TakeOrderFailure implements Action {
  readonly type = OrderActionTypes.TAKE_ORDER_FAILURE;
  constructor(public payload: any) {}
}

export class GetTakenOrders implements Action {
  readonly type = OrderActionTypes.GET_TAKEN_ORDERS;
  constructor() {}
}

export class GetTakenOrdersSuccess implements Action {
  readonly type = OrderActionTypes.GET_TAKEN_ORDERS_SUCCESS;
  constructor(public payload: { takenOrders: Order[] }) {}
}

export class GetTakenOrdersFailure implements Action {
  readonly type = OrderActionTypes.GET_TAKEN_ORDERS_FAILURE;
  constructor(public payload: any) {}
}

export type OrderActions =
  | PublishOrder
  | PublishOrderSuccess
  | PublishOrderFailure
  | GetMyOrders
  | GetMyOrdersSuccess
  | GetMyOrdersFailure
  | GetOrdersToTake
  | GetOrdersToTakeFailure
  | GetOrdersToTakeSuccess
  | TakeOrder
  | TakeOrderSuccess
  | TakeOrderFailure
  | GetTakenOrders
  | GetTakenOrdersFailure
  | GetTakenOrdersSuccess;
