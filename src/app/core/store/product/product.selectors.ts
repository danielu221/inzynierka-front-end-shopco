import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsPageState } from './product.reducer';

export const getProductsPageState = createFeatureSelector('productsPageState');

export const selectAllProducts = createSelector(
  getProductsPageState,
  (state: ProductsPageState) => state.products
);

export const selectAllProductsInCart = createSelector(
  getProductsPageState,
  (state: ProductsPageState) => state.cartItems
);

export const selectTotalCostOfProductsInCart = createSelector(
  getProductsPageState,
  (state: ProductsPageState) => state.totalCostOfProductsInCart
);
