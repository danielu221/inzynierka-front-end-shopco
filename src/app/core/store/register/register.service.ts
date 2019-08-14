import { Injectable } from '@angular/core';



import { ApiManagementService, endpoints } from 'src/app/shared/services/api-management.service';

import { FormRegister } from './register.state';

import { Observable } from 'rxjs';

import { RegisterResponse } from './register-response.interface';

import {RegisterRequest} from './register-request.interface'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient, private apiManagement: ApiManagementService) {}

    register(payload: FormRegister): Observable<RegisterResponse> {
        const request: RegisterRequest = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            phone:payload.phone,
            email: payload.email,
            password: payload.password,
            birthDate: payload.birthDate
        };
        return this.http.post<RegisterResponse>(this.apiManagement.getURL(endpoints.auth.register), request);
    }

}