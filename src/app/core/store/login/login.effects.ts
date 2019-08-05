import { Injectable } from "@angular/core";

import { Effect, ofType, Actions } from "@ngrx/effects";

import { of } from "rxjs";

import { Store, State } from "@ngrx/store";

import * as LoginActions from './login.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FormLogin } from "./login.reducer";
import { LoginResponse } from "./login.interfaces";
import { LoginFailure, LoginSuccess } from './login.actions';
import { HttpErrorResponse } from "@angular/common/http";
import {LoginService} from './login.service'

@Injectable()
export class LoginEffects {
    @Effect()
    login = this.actions$.pipe(
        ofType<LoginActions.SubmitFormLoginFormAction>(LoginActions.LoginActionsTypes.SUBMIT_LOGIN_FORM),
        map(action => action.payload),
        switchMap((payload: FormLogin) =>
            this.loginService.login(payload).pipe(
                map((res: LoginResponse) => new LoginSuccess(res)),
                catchError((err: HttpErrorResponse) => of(new LoginFailure(err)))
            )
        )
    );

    constructor( private actions$: Actions, private loginService: LoginService) {}
}
