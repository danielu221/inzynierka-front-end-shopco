import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, State } from '@ngrx/store';
import { Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CheckTokenValidation, SetUserAuthFromLS, InvalidateToken, Logout } from './auth.actions';
import {AuthActionTypes}  from './auth.actions'
import { RegisterSuccess, FormRegisterActionsTypes } from '../register/register.actions';
import { RegisterResponse } from '../register/register-response.interface';
import { LoginSuccess, FormLoginActionsTypes, LoginSuccessPayload } from '../login/login.actions';
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
        tap((payload: LoginSuccessPayload) => {
            localStorage.setItem(STORAGE_TOKEN, `${payload.token} `);
            localStorage.setItem(STORAGE_USER, JSON.stringify(payload.user));
            this.router.navigateByUrl('/products-list');
        })
    );

    @Effect({ dispatch: false })
    registerSuccess = this.actions$.pipe(
        ofType<RegisterSuccess>(FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_SUCCESS),
        map(action => action.payload),
        tap((payload: RegisterResponse) => {
            localStorage.setItem(STORAGE_TOKEN, `${payload.token}`);
            localStorage.setItem(STORAGE_USER, JSON.stringify(payload.user));
            this.router.navigateByUrl('/products-list');
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

    @Effect({ dispatch: false })
    logout = this.actions$.pipe(
        ofType<Logout>(AuthActionTypes.LOGOUT),
        tap(()=>{
            localStorage.removeItem(STORAGE_TOKEN);
            localStorage.removeItem(STORAGE_USER);
            this.router.navigateByUrl('/')
        })
    )

    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService
    ) {}
}
