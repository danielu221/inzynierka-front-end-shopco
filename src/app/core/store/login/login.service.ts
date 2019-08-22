import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiManagementService, endpoints } from '../../../shared/services/api-management.service';
import { Observable } from 'rxjs';
import { FormLogin } from './login.state';


@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private apiManagement: ApiManagementService) {}

    login(payload: FormLogin): Observable<any> {
        return this.http.post<any>(this.apiManagement.getURL(endpoints.auth.login), payload,{observe:'response'});
    }
}
