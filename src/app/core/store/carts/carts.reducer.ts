import { Cart } from '../../../shared/interface/cart.interface';
import { CartsActions, CartsActionTypes } from './carts.actions';
import { calcTotalCostOfProductsInCart } from '../product/product.reducer';

export interface CartsPageState {
  carts: Cart[];
}

export const initialCartsPageState: CartsPageState = {
  carts: []
};

export function CartsPageReducer(
  state = initialCartsPageState,
  action: CartsActions
) {
  switch (action.type) {
    case CartsActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        carts: [...action.payload]
      };

    case CartsActionTypes.REMOVE_CART:
      return {
        ...state,
        carts: [...state.carts.filter(cart => cart.id !== action.payload.id)]
      };

    case CartsActionTypes.UPDATE_QUANTITY_IN_CART_PREVIEW:
      const newState = {
        ...state,
        carts: state.carts.map(cart =>
          cart.id === action.payload.cartId
            ? {
                ...cart,
                cartItems: [
                  ...cart.cartItems.map(cartItem =>
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
                ]
              }
            : cart
        )
      };
      return {
        ...newState,
        carts: [
          ...newState.carts.map(cart =>
            cart.id === action.payload.cartId
              ? {
                  ...cart,
                  totalItemsPrice: calcTotalCostOfProductsInCart(cart.cartItems)
                }
              : cart
          )
        ]
      };

    case CartsActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.map(cart =>
          cart.id === action.payload.cartId
            ? {
                ...cart,
                cartItems: cart.cartItems.filter(
                  cartItem => cartItem.cartItemId != action.payload.cartItemId
                )
              }
            : cart
        )
      };

      case CartsActionTypes.UPDATE_CART_SUCCESS:
          return {
            ...state,
            carts: state.carts.map(cart =>
              cart.id === action.payload.cartId
                ? {
                    ...cart,
                    cartName: action.payload.cartName
                  }
                : cart
            )
          };
    default:
      return state;
  }
}
