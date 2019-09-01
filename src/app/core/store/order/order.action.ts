import { Action } from '@ngrx/store';

export enum OrderActionTypes {
  PUBLISH_ORDER = '[Order] Publish order'
}

export class PublishOrder implements Action {
  readonly type = OrderActionTypes.PUBLISH_ORDER;
  constructor(public payload: any) {}
}

export type OrderActions = PublishOrder;
