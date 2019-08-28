import { CartItem } from './cart-item.interface';

export interface Cart{
    cartItems:CartItem[];
    cartName:string;
    totalItemsPrice:number;
    id:number;
}