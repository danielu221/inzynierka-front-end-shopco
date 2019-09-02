import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState, CurrentOrderState } from './order.reducer';

export const selectOrderState = createFeatureSelector('order');

export const selectCartInformation = createSelector(
  selectOrderState,
  (state: CurrentOrderState) => state.cartInformation
);
export const selectFormOrder = createSelector(
  selectOrderState,
  (state: CurrentOrderState) => state.orderForm
);

export const selectTotalItemsPriceForOrder = createSelector(
  selectOrderState,
  (state: CurrentOrderState) => state.cartInformation.totalItemsPrice
);