
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

export const endpoints = {
    auth: {
        login: '/signin',
        register: '/auth/signup',
        registerConfirm: '/auth/registrationConfirm',
        checkToken: '/checkToken',
        forgetPassword: '/auth/resetPassword',
        confirmForgetPassword: '/auth/resetPasswordConfirm',
        changePassword: '/auth/changePassword'
    },
    products: '/product',
    cart:{
        save: '/listofitems'
    },
    carts:'/listofitems'
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
