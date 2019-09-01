import { Order } from '../../../shared/interface/order.interface';
import { CartsActions, CartsActionTypes } from '../carts/carts.actions';
import { OrderActionTypes, OrderActions } from './order.action';

export interface OrderState {
  currentOrder: Order;
}

const initialOrderState: OrderState = {
  currentOrder: null
};

export function orderReducer(
  state = initialOrderState,
  action: CartsActions | OrderActions
) {
  switch (action.type) {
    case CartsActionTypes.SAVE_CART_AND_REDIRECT_TO_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          address: 'test',
          cartName: action.payload.cartName,
          cartId: action.payload.cartId,
          creationDatetime: 'test',
          deliveryDateTime: 'test',
          asap: true
        }
      };
    case OrderActionTypes.PUBLISH_ORDER:
      return {
        ...state
      };
    default:
      return state;
  }
}
