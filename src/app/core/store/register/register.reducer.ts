import { Action, combineReducers } from '@ngrx/store';
import {
  createFormGroupState,
  formGroupReducer,
  FormGroupState,
  updateGroup,
  validate
} from 'ngrx-forms';
import {
  email,
  minLength,
  pattern,
  required,
  requiredTrue
} from 'ngrx-forms/validation';
import { State as RootState } from '../root-state';
import {
  FormRegisterActions,
  FormRegisterActionsTypes
} from './register.actions';
import {
  ComponentState,
  initialComponentState
} from 'src/app/shared/interface/component-state.interface';
import { FormRegister } from './register.state';

export interface State extends RootState {
  register: {
    formState: FormGroupState<FormRegister>;
    componentState: ComponentState;
  };
}

export const FORM_ID = 'register';

const initialValue: FormRegister = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  dateOfBirth: ''
};

export const INITIAL_STATE = createFormGroupState<FormRegister>(
  FORM_ID,
  initialValue
);

export const validateAndUpdateForm = updateGroup<FormRegister>({
  firstName: validate(required, minLength(2)),
  lastName: validate(required, minLength(2)),
  phone: validate(required),
  email: validate(required, email),
  password: validate(required),
  dateOfBirth: validate(required)
});

const reducers = combineReducers<State['register'], any>({
  formState(s = INITIAL_STATE, a: Action) {
    return validateAndUpdateForm(formGroupReducer(s, a));
  },
  componentState(state = initialComponentState, action: FormRegisterActions) {
    switch (action.type) {
      case FormRegisterActionsTypes.SUBMIT_REGISTER_FORM:
        return {
          isLoading: true,
          error: null
        };

      case FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_FAIL: {
        return {
          isLoading: false,
          error: action.payload.message
        };
      }

      default:
        return state;
    }
  }
});

export function reducer(s: State['register'], a: Action) {
  return reducers(s, a);
}
