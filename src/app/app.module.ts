import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { RootStoreModule } from './core/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiManagementService } from './shared/services/api-management.service';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { TokenInterceptor } from './shared/token.interceptor'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterModule } from 'angular2-toaster';
import { ToastMessageService } from './shared/services/toast-message.service';
import { AuthGuardService } from './core/store/auth/auth-guard.service';


registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootStoreModule,
    ToasterModule.forRoot(),
  ],
  providers: [AuthGuardService, ApiManagementService,{
    provide: LOCALE_ID,
    useValue: 'pl' 
   },{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },{ provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: [] },
  ToastMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
