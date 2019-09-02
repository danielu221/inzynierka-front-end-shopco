
import { Injectable } from '@angular/core';
import { ApiManagementService, endpoints } from '../../../shared/services/api-management.service';
import { PublishOrderRequestBody } from './order.action';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient,
    private apiManagement: ApiManagementService
  ) {}

  publishOrder(reqBody:PublishOrderRequestBody): Observable<any> {
    return this.http.post(this.apiManagement.getURL(endpoints.order.publish),reqBody,{responseType: 'text'});
  }
}