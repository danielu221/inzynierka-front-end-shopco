import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { ComponentState } from 'src/app/shared/interface/component-state.interface';
import { FormLogin, State } from 'src/app/core/store/login/login.reducer';
import { Store, select } from '@ngrx/store';
import { take, filter, map } from 'rxjs/operators';
import { SubmitFormLoginFormAction } from 'src/app/core/store/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  formState$: Observable<FormGroupState<FormLogin>>;
  componentState$: Observable<ComponentState>;
  constructor(private store: Store<State>) {
    this.formState$ = store.pipe(select(s => s.login.formState));
    this.componentState$ = store.pipe(select(s => s.login.componentState));
  }

  ngOnInit() {}
  submit() {
    this.formState$
        .pipe(
            take(1),
            filter(s => s.isValid),
            map(fs =>  new SubmitFormLoginFormAction(fs.value))
        )
        .subscribe(this.store);
}

}
