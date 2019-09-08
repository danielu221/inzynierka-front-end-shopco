import { Cart } from './cart.interface';
import { User } from './user.interface';

export interface Order {
  dispositionDeliveryAddress: string;
  creationDatetime: string;
  listOfItems: Cart;
  deliveryDatetime: string;
  status: string;
  id: number;
  code: string;
  principal: User;
  mandatory: User;
}

export enum OrderStatus {
  Published = 'Opublikowano',
  InProgress = 'W trakcie realizacji',
  Canceled = 'Anulowano',
  Delivered = 'Dostarczono'
}
