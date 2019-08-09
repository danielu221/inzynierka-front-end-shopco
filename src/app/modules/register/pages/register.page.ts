import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormRegister } from 'src/app/core/store/register/register.state';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { ComponentState } from 'src/app/shared/interface/component-state.interface';
import { State } from 'src/app/core/store/register/register.reducer';
import { take, filter, map } from 'rxjs/operators';
import { SubmitFormLoginFormAction } from 'src/app/core/store/login/login.actions';
import { SubmitFormRegisterAction } from 'src/app/core/store/register/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  formState$: Observable<FormGroupState<FormRegister>>;
  componentState$: Observable<ComponentState>;
  constructor(private store: Store<State>) {
    this.formState$ = store.pipe(select(s => s.register.formState));
    this.componentState$ = store.pipe(select(s => s.register.componentState));
  }

  ngOnInit() {
  }
  submit() {
    this.formState$
      .pipe(
        take(1),
        filter(s => s.isValid),
        map(fs => new SubmitFormRegisterAction(fs.value))
      )
      .subscribe(this.store);
  }
}
