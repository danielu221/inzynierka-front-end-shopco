import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  OrderState } from './order.reducer';
import { Order } from 'src/app/shared/interface/order.interface';

export const selectOrderState = createFeatureSelector('order');

export const selectCartInformation = createSelector(
  selectOrderState,
  (state: OrderState) => state.cartInformation
);
export const selectFormOrder = createSelector(
  selectOrderState,
  (state: OrderState) => state.orderForm
);

export const selectTotalItemsPriceForOrder = createSelector(
  selectOrderState,
  (state: OrderState) => state.cartInformation.totalItemsPrice
);

export const selectMyOrders = createSelector(
  selectOrderState,
  (state: OrderState) => state.myOrders
);

export const selectMyOrderTotalItemsPrice = createSelector(
  selectMyOrders,
  (myOrders: Order[],props) => myOrders.filter(order => order.id===props.orderId)[0].listOfItems.totalItemsPrice
);
export const selectMyOrderCartItems = createSelector(
  selectMyOrders,
  (myOrders: Order[],props) => myOrders.filter(order => order.id===props.orderId)[0].listOfItems.cartItems
);

export const selectOrdersToTake = createSelector(
  selectOrderState,
  (state: OrderState) => state.ordersToTake.orders
);

export const selectOrderToTakeTotalItemsPrice = createSelector(
  selectOrdersToTake,
  (ordersToTake: Order[],props) => ordersToTake.filter(order => order.id===props.orderId)[0].listOfItems.totalItemsPrice
);
export const selectOrderToTakeCartItems = createSelector(
  selectOrdersToTake,
  (ordersToTake: Order[],props) => ordersToTake.filter(order => order.id===props.orderId)[0].listOfItems.cartItems
);
