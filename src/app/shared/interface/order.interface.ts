import { Cart } from './cart.interface';

export interface Order {
  address: string;
  cartName: string;
  cartId: number;
  creationDatetime: string;
  deliveryDateTime: string;
  asap: boolean;
}
