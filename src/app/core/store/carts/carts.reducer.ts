import { Cart } from '../../../shared/interface/cart.interface';
import { CartsActions, CartsActionTypes } from './carts.actions';
import { calcTotalCostOfProductsInCart } from '../product/product.reducer';
import { ProductActions, ProductActionTypes } from '../product/product.action';

export interface CartsPageState {
  carts: Cart[];
}

export const initialCartsPageState: CartsPageState = {
  carts: []
};

export function CartsPageReducer(
  state = initialCartsPageState,
  action: CartsActions | ProductActions
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
      let newState = {
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
      newState = {
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

    case CartsActionTypes.SAVE_CART_AND_REDIRECT_TO_ORDER_SUCCESS:
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

    case ProductActionTypes.SAVE_CURRENT_CART_AND_REDIRECT_TO_ORDER_SUCCESS:
      let cart : Cart = {
        cartItems:action.payload.cartItems,
        cartName:action.payload.cartName,
        totalItemsPrice:action.payload.totalItemsPrice,
        id:action.payload.cartId,
      }
      return{
        ...state,
        carts: [...state.carts,cart]
      }
    default:
      return state;
  }
}
