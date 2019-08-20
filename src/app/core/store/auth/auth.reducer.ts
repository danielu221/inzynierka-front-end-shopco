import { AuthActionTypes, AuthActions } from './auth.actions';
import { initialAuthState, AuthState } from './auth.state';
import {
  FormLoginActionsTypes,
  FormLoginActions
} from '../login/login.actions';
import {
  FormRegisterActionsTypes,
  FormRegisterActions
} from '../register/register.actions';

import * as localStorageVariables from '../../../shared/variables/local-storage.variables';

export function authReducer(
  state = initialAuthState,
  action: FormLoginActions | FormRegisterActions | AuthActions
): AuthState {
  switch (action.type) {
    case FormLoginActionsTypes.SUBMIT_LOGIN_FORM_SUCCESS:
    case FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_SUCCESS: {
      return {
        ...state,
        token: `${action.payload.token.type} ${
          action.payload.token.access_token
        }`,
        user: action.payload.user
      };
    }

    case AuthActionTypes.SET_USER_AUTH_FROM_LS: {
      return {
        token: localStorage.getItem(localStorageVariables.STORAGE_TOKEN),
        user: JSON.parse(localStorage.getItem(localStorageVariables.STORAGE_USER))
      };
    }
    case AuthActionTypes.INVALIDATE_TOKEN: {
      return {
        token: null,
        user: null
      };
    }
    case AuthActionTypes.CHECK_TOKEN_VALIDATION: {
      return {
        token: null,
        user: null
      };
    }
    default: {
      return state;
    }
  }
}
