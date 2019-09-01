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
          console.log(payload);
          return new RegisterSuccess({
            token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5pZWx1a21hdGV1c3pAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJleHAiOjE1NjgxOTUzNzh9.f2cMaJIt0I0vrsBmbZln3-JNIiFXqquelduMQ3qU9VC-C9Pd3f4s3Psk3iecdl1cq39a2KPLBJK4oJMJZSe_Zw',
            user: {
              id: 612,
              firstname: 'Mateusz',
              lastname: 'Danieluk',
              email: 'danielukmateusz@gmail.com'
            }
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
