import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiManagementService, endpoints } from '../../../shared/services/api-management.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interface/product.interface';


@Injectable()
export class ProductService {
    constructor(private http: HttpClient, private apiManagement: ApiManagementService) {}

    getAll(): Observable<any> {
        return this.http.get<Product[]>(this.apiManagement.getURL(endpoints.products));
    }

}
