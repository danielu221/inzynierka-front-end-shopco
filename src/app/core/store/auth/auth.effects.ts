import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, State } from '@ngrx/store';
import { Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginResponse } from '../login/login-response.interface';
import { LogInSuccess } from './auth.actions';
import {AuthActionTypes}  from './auth.actions'

export const STORAGE_TOKEN = 'token';
export const STORAGE_USER = 'user';

@Injectable()
export class AuthEffects {
    @Effect({ dispatch: false })
    loginSuccess = this.actions$.pipe(
        ofType<LogInSuccess>(AuthActionTypes.LOGIN_SUCCESS),
        map(action => action.payload),
        tap((payload: LoginResponse) => {
            localStorage.setItem(STORAGE_TOKEN, `${payload.token.type} ${payload.token.access_token}`);
            localStorage.setItem(STORAGE_USER, JSON.stringify(payload.user));
            this.router.navigateByUrl('/');
        })
    );

    // @Effect({ dispatch: false })
    // registerSuccess = this.actions$.pipe(
    //     ofType<RegisterSuccess>(FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_SUCCESS),
    //     map(action => action.payload),
    //     tap((payload: RegisterResponse) => {
    //         localStorage.setItem(STORAGE_TOKEN, `${payload.token.type} ${payload.token.access_token}`);
    //         localStorage.setItem(STORAGE_USER, JSON.stringify(payload.user));
    //         this.router.navigateByUrl('/');
    //     })
    // );


    constructor(
        private actions$: Actions,
        private router: Router,
    ) {}
}
