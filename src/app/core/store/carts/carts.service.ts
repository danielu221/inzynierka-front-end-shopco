import { Injectable } from '@angular/core';

import {
  ApiManagementService,
  endpoints
} from 'src/app/shared/services/api-management.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartsService {
  constructor(
    private http: HttpClient,
    private apiManagement: ApiManagementService
  ) {}
  getAll(userId:number): Observable<any> {
    return this.http.get(this.apiManagement.getURL(endpoints.carts)+'/'+userId);
  }

  removeCart(cartId:number): Observable<any>{
    return this.http.delete(this.apiManagement.getURL(endpoints.carts)+'/'+cartId,{responseType: 'text'});

  }
}
