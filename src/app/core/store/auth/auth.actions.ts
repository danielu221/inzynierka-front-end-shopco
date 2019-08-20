import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    CHECK_TOKEN_VALIDATION = '[Auth] Get Token valid',
    SET_USER_AUTH_FROM_LS = '[Auth] Get token and user details from localstorage',
    INVALIDATE_TOKEN = '[Auth] Token is expired'
}

export class CheckTokenValidation implements Action {
    readonly type = AuthActionTypes.CHECK_TOKEN_VALIDATION;

    constructor(public payload: string) {}
}

export class SetUserAuthFromLS implements Action {
    readonly type = AuthActionTypes.SET_USER_AUTH_FROM_LS;
}

export class InvalidateToken implements Action {
    readonly type = AuthActionTypes.INVALIDATE_TOKEN;
}

export type AuthActions = CheckTokenValidation | SetUserAuthFromLS | InvalidateToken;
