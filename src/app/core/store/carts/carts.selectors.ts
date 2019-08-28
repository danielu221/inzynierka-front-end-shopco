import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CartsPageState} from './carts.reducer'

export const getCartsPageState = createFeatureSelector('cartsPageState');

export const selectAllCarts = createSelector(
    getCartsPageState,
  (state: CartsPageState) => state.carts
);