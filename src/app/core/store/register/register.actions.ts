import { Action } from '@ngrx/store';
import { FormRegister } from './register.state';
import { RegisterResponse } from './register-response.interface';
import { User } from 'src/app/shared/interface/user.interface';

export enum FormRegisterActionsTypes {
  SUBMIT_REGISTER_FORM = '[REGISTER FORM] Submit form',
  SUBMIT_REGISTER_FORM_SUCCESS = '[REGISTER FORM] Submit form Success',
  SUBMIT_REGISTER_FORM_FAIL = '[REGISTER FORM] Submit form Fail',
  REGISTER_CONFIRM = '[REGISTER FORM] Register Confirm',
  REGISTER_CONFIRM_SUCCESS = '[REGISTER FORM] Register Confirm Success',
  REGISTER_CONFIRM_FAIL = '[REGISTER FORM] Register Confirm Fail'
}

export class SubmitFormRegisterAction implements Action {
  readonly type = FormRegisterActionsTypes.SUBMIT_REGISTER_FORM;

  constructor(public payload: FormRegister) {}
}

export class RegisterSuccess implements Action {
  readonly type = FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_SUCCESS;

  constructor(public payload: { token: string; user: User }) {}
}

export class RegisterFailure implements Action {
  readonly type = FormRegisterActionsTypes.SUBMIT_REGISTER_FORM_FAIL;

  constructor(public payload: Error) {}
}

export class RegisterConfirmAction implements Action {
  readonly type = FormRegisterActionsTypes.REGISTER_CONFIRM;

  constructor(public payload: string) {}
}

export class RegisterConfirmSuccessAction implements Action {
  readonly type = FormRegisterActionsTypes.REGISTER_CONFIRM_SUCCESS;
}

export class RegisterConfirmFailAction implements Action {
  readonly type = FormRegisterActionsTypes.REGISTER_CONFIRM_FAIL;

  constructor(public payload: string) {}
}

export type FormRegisterActions =
  | SubmitFormRegisterAction
  | RegisterSuccess
  | RegisterFailure
  | RegisterConfirmAction
  | RegisterConfirmSuccessAction
  | RegisterConfirmFailAction;
