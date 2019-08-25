import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsPageState } from './product.reducer';

export const getProductsPageState = createFeatureSelector('productsPage');

export const selectAllProducts = createSelector(
  getProductsPageState,
  (state: ProductsPageState) => state.products
);

export const selectAllProductsInCart = createSelector(
  getProductsPageState,
  (state: ProductsPageState) => state.productsInCart
);
