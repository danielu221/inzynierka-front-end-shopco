import {Cart} from '../../../shared/interface/cart.interface';
import { CartsActions, CartsActionTypes } from './carts.actions';

export interface CartsPageState {
    carts: Cart[];
  }

export const initialCartsPageState: CartsPageState = {
    carts:[]
};


export function CartsPageReducer(
    state = initialCartsPageState,
    action: CartsActions
  ) {
    switch (action.type) {
      case CartsActionTypes.LOAD_SUCCESS:
        return {
          ...state,
          carts: [...action.payload]
        };
        default:
          return state
    }

}