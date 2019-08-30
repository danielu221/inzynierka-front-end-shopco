import { Injectable } from '@angular/core';

import {
  ApiManagementService,
  endpoints
} from 'src/app/shared/services/api-management.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISaveCartRequest, IRequestCartItem } from '../product/product.service';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { getDateNowFormatted } from 'src/app/shared/utils';

@Injectable()
export class CartsService {
  constructor(
    private http: HttpClient,
    private apiManagement: ApiManagementService
  ) {}
  getAll(userId: number): Observable<any> {
    return this.http.get(
      this.apiManagement.getURL(endpoints.carts) + '/' + userId
    );
  }

  removeCart(cartId: number): Observable<any> {
    return this.http.delete(
      this.apiManagement.getURL(endpoints.carts) + '/' + cartId,
      { responseType: 'text' }
    );
  }

  removeItemFromCart(cartId: number, cartItemId: number) {
    return this.http.delete(
      this.apiManagement.getURL(endpoints.carts) +
        '/' +
        cartId +
        '/' +
        cartItemId,
      { responseType: 'text' }
    );
  }

  updateCart(cartId: number, cartItems: CartItem[], listName:string): Observable<any> {
    let requestBody: ISaveCartRequest;
    let items: IRequestCartItem[];
    items = cartItems.map(cartItem => {
      return {
        productId: cartItem.id,
        productUnits: cartItem.quantity
      };
    });
    requestBody = {
      listName: listName,
      creationDate: getDateNowFormatted(),
      items: items
    };
    return this.http.put(
      this.apiManagement.getURL(endpoints.carts) + '/' + cartId,
      requestBody,
      { responseType: 'text' }
    );
  }
}
