import { Component } from '@angular/core';
import { STORAGE_TOKEN } from './shared/variables/local-storage.variables';
import { Store } from '@ngrx/store';
import { State } from './core/store/root-state';
import { CheckTokenValidation } from './core/store/auth/auth.actions';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { ToastConfig } from './shared/interface/toast-config.interface';
import { ToastMessageService } from './shared/services/toast-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopco';
  toasterService: ToasterService;

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade'
  });

  toastMessageService:ToastMessageService;
  constructor(
    private store: Store<State>,
    toasterService: ToasterService,
    toastMessageService: ToastMessageService
  ) {
    const token = localStorage.getItem(STORAGE_TOKEN);
    // TODO: uncomment when endpoint will be ready
    if (token) {
      this.store.dispatch(new CheckTokenValidation(token));
    }
    this.toastMessageService = toastMessageService;
    this.toasterService = toasterService;
  }
}
