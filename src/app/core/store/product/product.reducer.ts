import { State as RootState, State } from '../root-state';
import { Product } from 'src/app/shared/interface/product.interface';
import { ProductActions } from './product.action';
import { ProductActionTypes } from './product.action';
import { ProductState } from './ProductState';

import { CartItem } from '../../../shared/interface/cart-item.interface';

export interface ProductsPageState {
  products: ProductState[];
  cartItems: CartItem[];
  totalCostOfProductsInCart: number;
}

export const initialProductsPageState: ProductsPageState = {
  products: [],
  cartItems: [],
  totalCostOfProductsInCart: 0
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
        cartItems: [...state.cartItems, action.payload].map(
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
        ),
        totalCostOfProductsInCart: +(
          state.totalCostOfProductsInCart + action.payload.unitPrice
        ).toFixed(2)
      };

    case ProductActionTypes.REMOVE:
      let newState = {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
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
      return {
        ...newState,
        totalCostOfProductsInCart: calcTotalCostOfProductsInCart(
          newState.cartItems
        )
      };

    case ProductActionTypes.UPDATE_QUANTITY_IN_CART:
      newState = {
        ...state,
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === action.payload.cartItemId
            ? {
                ...cartItem,
                quantity: action.payload.updatedQuantity,
                totalPrice: +(
                  action.payload.updatedQuantity * cartItem.unitPrice
                ).toFixed(2)
              }
            : cartItem
        )
      };
      return {
        ...newState,
        totalCostOfProductsInCart: calcTotalCostOfProductsInCart(
          newState.cartItems
        )
      };

    default:
      return state;
  }
}

function calcTotalCostOfProductsInCart(cartItems: CartItem[]) {
  return +cartItems.reduce((a, curr) => a + curr.totalPrice, 0).toFixed(2);
}
