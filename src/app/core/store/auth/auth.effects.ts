import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, State } from '@ngrx/store';
import { Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginResponse } from '../login/login-response.interface';
import { CheckTokenValidation, SetUserAuthFromLS, InvalidateToken } from './auth.actions';
import {AuthActionTypes}  from './auth.actions'
import { RegisterSuccess, FormRegisterActionsTypes } from '../register/register.actions';
import { RegisterResponse } from '../register/register-response.interface';
import { LoginSuccess, FormLoginActionsTypes } from '../login/login.actions';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

export const STORAGE_TOKEN = 'token';
export const STORAGE_USER = 'user';

@Injectable()
export class AuthEffects {
    @Effect({ dispatch: false })
    loginSuccess = this.actions$.pipe(
        ofType<LoginSuccess>(FormLoginActionsTypes.SUBMIT_LOGIN_FORM_SUCCESS),
        map(action => action.payload),
        tap((payload: LoginResponse) => {
            localStorage.setItem(STORAGE_TOKEN, `${payload.token.type} ${payload.token.access_token}`);
            localStorage.setItem(STORAGE_USER, JSON.stringify(payload.user));
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    registerSuccess = this.actions$.pipe(
        ofType<RegisterSuccess>(FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_SUCCESS),
        map(action => action.payload),
        tap((payload: RegisterResponse) => {
            localStorage.setItem(STORAGE_TOKEN, `${payload.token.type} ${payload.token.access_token}`);
            localStorage.setItem(STORAGE_USER, JSON.stringify(payload.user));
            this.router.navigateByUrl('/');
        })
    );


    @Effect()
    checkTokenValidation = this.actions$.pipe(
        ofType<CheckTokenValidation>(AuthActionTypes.CHECK_TOKEN_VALIDATION),
        map(action => action.payload),
        switchMap(token =>
            this.authService.checkToken(token).pipe(
                map(() => new SetUserAuthFromLS()),
                catchError(() => {
                    // localStorage.removeItem(STORAGE_TOKEN);
                    // localStorage.removeItem(STORAGE_USER);
                    // return of(new InvalidateToken());
                    return of(new SetUserAuthFromLS());
                })
            )
        )
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService
    ) {}
}
