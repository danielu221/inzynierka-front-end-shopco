import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ApiManagementService,
  endpoints
} from '../../../shared/services/api-management.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interface/product.interface';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';

import { getDateNowFormatted } from '../../../shared/utils';

export interface ISaveCartRequest {
  listName: string;
  creationDate: string;
  items: IRequestCartItem[];
}

export interface IRequestCartItem {
  productId: number;
  productUnits: number;
}

@Injectable()
export class ProductService {
  constructor(
    private http: HttpClient,
    private apiManagement: ApiManagementService
  ) {}

  getAll(): Observable<any> {
    return this.http.get<Product[]>(
      this.apiManagement.getURL(endpoints.products)
    );
  }

  saveCart(listName: string, cartItems: CartItem[]): Observable<any> {
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
    return this.http.post(
      this.apiManagement.getURL(endpoints.cart.save),
      requestBody
    );
  }

  searchForProducts(searchValue: string): Observable<any> {
    return this.http.post(
      this.apiManagement.getURL(endpoints.searchForProducts),
      { searchParam: searchValue }
    );
  }
}
