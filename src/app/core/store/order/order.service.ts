import { Injectable } from '@angular/core';
import {
  ApiManagementService,
  endpoints
} from '../../../shared/services/api-management.service';
import { PublishOrderRequestBody } from './order.action';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient,
    private apiManagement: ApiManagementService
  ) {}

  publishOrder(reqBody: PublishOrderRequestBody): Observable<any> {
    return this.http.post(
      this.apiManagement.getURL(endpoints.order.publish),
      reqBody,
      { responseType: 'text' }
    );
  }

  getMyOrders(): Observable<any> {
    return this.http.get(this.apiManagement.getURL(endpoints.order.myOrders));
  }

  getOrdersToTake(): Observable<any> {
    return this.http.get(this.apiManagement.getURL(endpoints.order.toTake));
  }

  takeOrder(orderId: number): Observable<any> {
    return this.http.put(
      this.apiManagement.getURL(endpoints.order.take + '/' + orderId),
      {},
      { responseType: 'text' }
    );
  }

  getTakenOrders(): Observable<any> {
    return this.http.get(
      this.apiManagement.getURL(endpoints.order.takenOrders)
    );
  }

  sendCode(orderId: number, code: string): Observable<any> {
    return this.http.post(
      this.apiManagement.getURL(endpoints.order.sendCode + '/' + orderId),
      { code: code },
      { responseType: 'text' }
    );
  }

  sendProblem(orderId: number, description: string): Observable<any> {
    return this.http.post(
      this.apiManagement.getURL(endpoints.order.sendProblem),
      { dispositionId: orderId, description: description },
      { responseType: 'text' }
    );
  }
}
