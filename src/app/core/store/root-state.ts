import { AuthState } from './auth/auth.state';
import { ProductsPageState } from './product/product.reducer';
import { CartsPageState } from './carts/carts.reducer';
import { State } from './order/order.reducer';

export interface State {
  auth: AuthState;
  productsPageState?: ProductsPageState;
  cartsPageState?:CartsPageState;
}
