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

export interface OrderState extends RootState {
  order:CurrentOrderState
}

export interface CurrentOrderState{
  cartInformation: {
    cartId:number;
    cartName:string;
    totalItemsPrice:number;
  };
  orderForm: FormGroupState<FormOrder>;
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
  totalItemsPrice:null
};

export const validateAndUpdateForm = updateGroup<FormOrder>({
  address: validate(required),
  paymentCard:validate(required)
});

const reducers = combineReducers<OrderState['order'], any>({
  orderForm(s = INITIAL_STATE, a: Action) {
    return validateAndUpdateForm(formGroupReducer(s, a));
  },
  cartInformation(state = initialCartInformation, action: CartsActions | OrderActions) {
    switch (action.type) {
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
  }
});

export function reducer(s: OrderState['order'], a: Action) {
  return reducers(s, a);
}
