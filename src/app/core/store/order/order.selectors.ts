import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.reducer';

export const selectOrderState = createFeatureSelector('order');

export const selectCurrentOrder = createSelector(
  selectOrderState,
  (state: OrderState) => state.currentOrder
);
