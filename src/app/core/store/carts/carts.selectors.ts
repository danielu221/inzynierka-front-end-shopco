import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CartsPageState} from './carts.reducer'
import { Cart } from 'src/app/shared/interface/cart.interface';

export const getCartsPageState = createFeatureSelector('cartsPageState');

export const selectAllCarts = createSelector(
    getCartsPageState,
  (state: CartsPageState) => state.carts
);

export const selectCart = createSelector(
  getCartsPageState,
(state: CartsPageState, props) => { return state.carts.filter(cart => cart.id === props.cartId)[0]});

export const selectCartItemsForCart = createSelector(
  selectCart,
  (cart:Cart)=> cart.cartItems
)

export const selectTotalItemsPrice = createSelector(
  selectCart,
  (cart:Cart)=>cart.totalItemsPrice
)

export const selectCartName = createSelector(
  selectCart,
  (cart:Cart)=> cart.cartName
)