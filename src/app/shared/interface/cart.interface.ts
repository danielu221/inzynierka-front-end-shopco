import { CartItem } from './cart-item.interface';

export interface Cart{
    cartItems:CartItem[];
    cartTotalPrice:number;
}