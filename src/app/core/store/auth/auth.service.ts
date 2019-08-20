import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiManagementService, endpoints } from '../../../shared/services/api-management.service';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private apiManagement: ApiManagementService) {}

    checkToken(token): Observable<any> {
        const headers = {
            Authorization: token
        };
        return this.http.get(this.apiManagement.getURL(endpoints.auth.checkToken), { headers });
    }
}
