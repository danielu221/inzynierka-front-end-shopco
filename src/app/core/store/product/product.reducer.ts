import { State as RootState, State } from '../root-state';
import { Product } from 'src/app/shared/interface/product.interface';
import { ProductActions } from './product.action';
import { ProductActionTypes } from './product.action';
import { ProductState } from './ProductState';

import { CartItem } from '../../../shared/interface/cart-item.interface';

export interface ProductsPageState {
  products: ProductState[];
  productsInCart: CartItem[];
}

export const initialProductsPageState: ProductsPageState = {
  products: [],
  productsInCart: []
};

export function ProductsPageReducer(
  state = initialProductsPageState,
  action: ProductActions
) {
  switch (action.type) {
    case ProductActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        products: [...action.payload]
      };

    case ProductActionTypes.ADD:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload].map(
          product => {
            return { ...product, quantity: 1, totalPrice: product.unitPrice };
          }
        ),
        products: state.products.map(product =>
          product.id === action.payload.id
            ? {
                ...product,
                isInCart: true
              }
            : product
        )
      };

    case ProductActionTypes.REMOVE:
      return {
        ...state,
        productsInCart: [
          ...state.productsInCart.filter(
            product => product.id !== action.payload.id
          )
        ],
        products: state.products.map(product =>
          product.id === action.payload.id
            ? {
                ...product,
                isInCart: false
              }
            : product
        )
      };

    case ProductActionTypes.UPDATE_QUANTITY_IN_CART:
      return {
        ...state,
        productsInCart: 
          state.productsInCart.map(cartItem =>
            cartItem.id === action.payload.cartItemId
              ? {
                  ...cartItem,
                  quantity: action.payload.updatedQuantity,
                  totalPrice: (action.payload.updatedQuantity * cartItem.unitPrice).toFixed(2)
                }
              : cartItem
          )
      };

    default:
      return state;
  }
}
