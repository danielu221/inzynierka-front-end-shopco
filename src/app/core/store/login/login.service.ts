import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiManagementService, endpoints } from '../../../shared/services/api-management.service';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response.interface';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private apiManagement: ApiManagementService) {}

    login(payload: any): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiManagement.getURL(endpoints.auth.login), payload);
    }
}
