import { Cart } from './cart.interface';

export interface Order {
  dispositionDeliveryAddress: string;
  creationDatetime: string;
  listOfItems: Cart;
  deliveryDateTime: string;
  status: string;
  id:number;
}


export enum OrderStatus{
  Published="Opublikowano",
  InProgress = "W trakcie realizacji",
  Canceled = "Anulowano",
  Delivered = "Dostarczono"
}