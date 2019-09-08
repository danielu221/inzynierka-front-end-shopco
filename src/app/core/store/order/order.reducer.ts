import { Order } from '../../../shared/interface/order.interface';
import { CartsActions, CartsActionTypes } from '../carts/carts.actions';
import { OrderActionTypes, OrderActions } from './order.action';
import {
  createFormGroupState,
  FormGroupState,
  formGroupReducer,
  updateGroup,
  validate
} from 'ngrx-forms';
import { combineReducers, Action } from '@ngrx/store';
import { State as RootState } from '../root-state';
import { required } from 'ngrx-forms/validation';
import { ProductActionTypes, ProductActions } from '../product/product.action';
import { state } from '@angular/animations';

export interface State extends RootState {
  order: OrdersState;
}

export interface OrdersState {
  cartInformation: {
    cartId: number;
    cartName: string;
    totalItemsPrice: number;
  };
  orderForm: FormGroupState<FormOrder>;
  myOrders: Order[];
  ordersToTake: {
    orders: Order[];
  };
  takenOrders: {
    orders: Order[];
  };
}

export interface FormOrder {
  address: string;
  paymentCard: string;
  asap: boolean;
  deliveryDateTime: string;
}

export const FORM_ID = 'currentOrder';
export const INITIAL_STATE = createFormGroupState<FormOrder>(FORM_ID, {
  address: '',
  paymentCard: '',
  asap: false,
  deliveryDateTime: ''
});

const initialCartInformation = {
  cartName: '',
  cartId: null,
  totalItemsPrice: null
};

const initialMyOrders = [];

const initialOrdersToTake = {
  orders: []
};

const initialTakenOrders = {
  orders: []
};

export const validateAndUpdateForm = updateGroup<FormOrder>({
  address: validate(required),
  paymentCard: validate(required)
});

const reducers = combineReducers<State['order'], any>({
  orderForm(s = INITIAL_STATE, a: Action) {
    return validateAndUpdateForm(formGroupReducer(s, a));
  },
  cartInformation(
    state = initialCartInformation,
    action: CartsActions | OrderActions | ProductActions
  ) {
    switch (action.type) {
      case ProductActionTypes.SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER_SUCCESS:
      case CartsActionTypes.SAVE_CART_AND_REDIRECT_TO_ORDER_SUCCESS:
        return {
          ...state,
          cartName: action.payload.cartName,
          cartId: action.payload.cartId,
          totalItemsPrice: action.payload.totalItemsPrice
        };
      default:
        return state;
    }
  },
  myOrders(
    state = initialMyOrders,
    action: CartsActions | OrderActions | ProductActions
  ) {
    switch (action.type) {
      case OrderActionTypes.GET_MY_ORDERS_SUCCESS:
        return [...action.payload.myOrders];
      default:
        return state;
    }
  },
  ordersToTake(
    state = initialOrdersToTake,
    action: CartsActions | OrderActions | ProductActions
  ) {
    switch (action.type) {
      case OrderActionTypes.GET_ORDERS_TO_TAKE_SUCCESS:
        return {
          ...state,
          orders: [...action.payload.ordersToTake]
        };
      case OrderActionTypes.TAKE_ORDER_SUCCESS:
        return {
          ...state,
          orders: [
            ...state.orders.filter(order => order.id !== action.payload.orderId)
          ]
        };
      default:
        return state;
    }
  },
  takenOrders(
    state = initialTakenOrders,
    action: CartsActions | OrderActions | ProductActions
  ) {
    switch (action.type) {
      case OrderActionTypes.GET_TAKEN_ORDERS_SUCCESS:
        return {
          ...state,
          orders: [...action.payload.takenOrders]
        };
      case OrderActionTypes.SEND_CODE_SUCCESS:
        return {
          ...state,
          orders: [
            ...state.orders.filter(order => order.id !== action.payload.orderId)
          ]
        };
      default:
        return state;
    }
  }
});

export function reducer(s: State['order'], a: Action) {
  return reducers(s, a);
}
