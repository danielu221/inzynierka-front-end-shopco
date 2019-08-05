import { Action } from '@ngrx/store';
import { FormLogin } from './login.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from './login.interfaces';

export enum LoginActionsTypes {
    SUBMIT_LOGIN_FORM = '[LOGIN FORM] Submit form',
    SUBMIT_LOGIN_FORM_SUCCESS = '[LOGIN FORM] Submit form Success',
    SUBMIT_LOGIN_FORM_FAIL = '[LOGIN FORM] Submit form Fail'
}

export class SubmitFormLoginFormAction implements Action {
    readonly type = LoginActionsTypes.SUBMIT_LOGIN_FORM;

    constructor(public payload: FormLogin) {}
}

export class LoginSuccess implements Action {
    readonly type = LoginActionsTypes.SUBMIT_LOGIN_FORM_SUCCESS;

    constructor(public payload: LoginResponse) {}
}

export class LoginFailure implements Action {
    readonly type = LoginActionsTypes.SUBMIT_LOGIN_FORM_FAIL;

    constructor(public payload: HttpErrorResponse) {}
}

export type LoginActions = SubmitFormLoginFormAction | LoginSuccess | LoginFailure;
