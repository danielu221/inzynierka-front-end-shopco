import { AuthState } from './auth/auth.state';
import { ProductsPageState } from './product/product.reducer';

export interface State {
  auth: AuthState;
  productsPageState?: ProductsPageState
}
