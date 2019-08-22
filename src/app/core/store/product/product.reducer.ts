import { State as RootState, State } from '../root-state';
import { Product } from 'src/app/shared/interface/product.interface';
import { ProductActions } from './product.action';
import {ProductActionTypes} from './product.action'

export interface ProductsPageState extends State  {
  products: Product[];
  cart: any;
}

export const initialProductsPageState: ProductsPageState = {
 products:[],
 cart:null,
 auth:null
};

export function ProductsPageReducer(state = initialProductsPageState, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        products: [...action.payload]
      };

    case ProductActionTypes.ADD:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    // case ProductActionTypes.Remove:
    //   return {
    //     ...state,
    //     cart: [...state.cart.filter(item => item.name !== action.payload.name)]
    //   };

    default:
      return state;
  }
}