import { Action } from '@ngrx/store';
import { Order } from 'src/app/shared/interface/order.interface';

export enum OrderActionTypes {
  PUBLISH_ORDER = '[Order] Publish order',
  SUBMIT_ORDER_FORM = '[Order] submit form',
  PUBLISH_ORDER_SUCCESS = '[Order] publish success',
  PUBLISH_ORDER_FAILURE = '[Order] publish failed'
}

export interface PublishOrderRequestBody {
  dispositionDeliveryAddress: string;
  listId: number;
  creationDatetime: string;
  deliveryDatetime: string;
  asap: boolean;
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

// export class SubmitOrderFormAction implements Action {
//   readonly type = OrderActionTypes.SUBMIT_ORDER_FORM;
//   constructor(public payload: SaveOrderRequestBody) {}
// }

export type OrderActions = PublishOrder | PublishOrderSuccess | PublishOrderFailure  ;
