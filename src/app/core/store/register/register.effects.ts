import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  SubmitFormRegisterAction,
  FormRegisterActionsTypes,
  RegisterSuccess,
  RegisterFailure
} from './register.actions';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { FormRegister } from './register.state';
import { RegisterResponse } from './register-response.interface';
import { of } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable()
export class RegisterEffects {
  @Effect()
  register = this.actions$.pipe(
    ofType<SubmitFormRegisterAction>(
      FormRegisterActionsTypes.SUBMIT_REGISTER_FORM
    ),
    map(action => action.payload),
    switchMap((payload: FormRegister) =>
      this.registerService.register(payload).pipe(
        map((res: any) => {
          return new RegisterSuccess({
            user: {
              id: res.body.id,
              firstname: res.body.firstname,
              lastname: res.body.lastname,
              email: res.body.email
            },
            token: res.headers.get('Authorization')
          });
        }),
        catchError((err: Error) => of(new RegisterFailure(err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private registerService: RegisterService
  ) {}
}
