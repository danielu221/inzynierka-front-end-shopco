import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from './order.reducer';
import { Order } from 'src/app/shared/interface/order.interface';

export const selectOrderState = createFeatureSelector('order');

export const selectIsLoading = createSelector(
  selectOrderState,
  (state: OrdersState) => state.componentState.isLoading
);

export const selectCartInformation = createSelector(
  selectOrderState,
  (state: OrdersState) => state.cartInformation
);
export const selectFormOrder = createSelector(
  selectOrderState,
  (state: OrdersState) => state.orderForm
);

export const selectTotalItemsPriceForOrder = createSelector(
  selectOrderState,
  (state: OrdersState) => state.cartInformation.totalItemsPrice
);

export const selectMyOrders = createSelector(
  selectOrderState,
  (state: OrdersState) => state.myOrders
);

export const selectMyOrderTotalItemsPrice = createSelector(
  selectMyOrders,
  (myOrders: Order[], props) =>
    myOrders.filter(order => order.id === props.orderId)[0].listOfItems
      .totalItemsPrice
);
export const selectMyOrderCartItems = createSelector(
  selectMyOrders,
  (myOrders: Order[], props) =>
    myOrders.filter(order => order.id === props.orderId)[0].listOfItems
      .cartItems
);

export const selectOrdersToTake = createSelector(
  selectOrderState,
  (state: OrdersState) => state.ordersToTake.orders
);

export const selectOrderToTakeTotalItemsPrice = createSelector(
  selectOrdersToTake,
  (ordersToTake: Order[], props) =>
    ordersToTake.filter(order => order.id === props.orderId)[0].listOfItems
      .totalItemsPrice
);
export const selectOrderToTakeCartItems = createSelector(
  selectOrdersToTake,
  (ordersToTake: Order[], props) =>
    ordersToTake.filter(order => order.id === props.orderId)[0].listOfItems
      .cartItems
);

export const selectTakenOrders = createSelector(
  selectOrderState,
  (state: OrdersState) => state.takenOrders.orders
);

export const selectTakenOrderTotalItemsPrice = createSelector(
  selectTakenOrders,
  (takenOrders: Order[], props) =>
    takenOrders.filter(order => order.id === props.orderId)[0].listOfItems
      .totalItemsPrice
);
export const selectTakenOrderCartItems = createSelector(
  selectTakenOrders,
  (takenOrders: Order[], props) =>
    takenOrders.filter(order => order.id === props.orderId)[0].listOfItems
      .cartItems
);
