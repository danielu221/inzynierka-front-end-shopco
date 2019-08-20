import { State as RootState } from '../root-state';
import {
  createFormGroupState,
  formGroupReducer,
  FormGroupState,
  updateGroup,
  validate
} from 'ngrx-forms';
import { email, required } from 'ngrx-forms/validation';
import {
  ComponentState,
  initialComponentState
} from 'src/app/shared/interface/component-state.interface';
import { combineReducers, Action } from '@ngrx/store';
import { FormLoginActionsTypes, FormLoginActions } from './login.actions';

export interface FormLogin {
  email: string;
  password: string;
}

export interface State extends RootState {
  login: {
    formState: FormGroupState<FormLogin>;
    componentState: ComponentState;
  };
}

export const FORM_ID = 'login';

export const INITIAL_STATE = createFormGroupState<FormLogin>(FORM_ID, {
  email: '',
  password: ''
});

export const validateAndUpdateForm = updateGroup<FormLogin>({
  email: validate(required, email),
  password: validate(required)
});

const reducers = combineReducers<State['login'], any>({
  formState(state = INITIAL_STATE, action: Action) {
    return validateAndUpdateForm(formGroupReducer(state, action));
  },
  componentState(state = initialComponentState, action: FormLoginActions) {
    switch (action.type) {
      case FormLoginActionsTypes.SUBMIT_LOGIN_FORM:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case FormLoginActionsTypes.SUBMIT_LOGIN_FORM_SUCCESS:
        return {
          ...state,
          isLoading: false
        };
      case FormLoginActionsTypes.SUBMIT_LOGIN_FORM_FAIL: {
        return {
          ...state,
          isLoading: false,
          error: action.payload.statusText
        };
      }

      default:
        return state;
    }
  }
});

export function reducer(s: State['login'], a: Action) {
  return reducers(s, a);
}
