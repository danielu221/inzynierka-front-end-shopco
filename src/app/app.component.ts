import { Component } from '@angular/core';
import { STORAGE_TOKEN } from './shared/variables/local-storage.variables';
import { Store } from '@ngrx/store';
import { State } from './core/store/root-state';
import { CheckTokenValidation } from './core/store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopco';
  constructor(private store:Store<State>){

  const token = localStorage.getItem(STORAGE_TOKEN);
  // TODO: uncomment when endpoint will be ready
  if (token) {
      this.store.dispatch(new CheckTokenValidation(token));
  }
  }
}


