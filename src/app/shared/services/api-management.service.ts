
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

export const endpoints = {
    auth: {
        login: '/signin',
        register: '/user',
        checkToken: '/checkToken',
    },
    products: '/product',
    cart:{
        save: '/listofitems'
    },
    order:{
        publish:'/disposition',
        myOrders:'/disposition/principal',
        othersOrders:'/disposition',
        toTake:'/disposition/status/PUBLISHED',
        take:'/disposition/mandatory',
        takenOrders:'/disposition/mandatory'
    },
    carts:'/listofitems',
};

@Injectable()
export class ApiManagementService {
    public getURL(endpoint) {
        return `${environment.api}${endpoint}`;
    }

    public getWithArgs(endpoint, ...args) {
        const extraArgs = args.join('/');
        return `${environment.api}${endpoint}/${extraArgs}`;
    }
}
