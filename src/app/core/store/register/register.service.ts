import { Injectable } from '@angular/core';

import {
  ApiManagementService,
  endpoints
} from 'src/app/shared/services/api-management.service';

import { FormRegister } from './register.state';

import { Observable } from 'rxjs';

import { RegisterResponse } from './register-response.interface';

import { RegisterRequest } from './register-request.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  constructor(
    private http: HttpClient,
    private apiManagement: ApiManagementService
  ) {}

  register(payload: FormRegister): Observable<any> {
    const request: RegisterRequest = {
      firstname: payload.firstName,
      lastname: payload.lastName,
      phone: payload.phone,
      email: payload.email,
      password: payload.password,
      dateOfBirth: payload.dateOfBirth,
      cardNumber: payload.cardNumber
    };
    return this.http.post(
      this.apiManagement.getURL(endpoints.auth.register),
      request,
      { observe: 'response' }
    );
  }
}
