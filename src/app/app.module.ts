import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { RootStoreModule } from './core/store';
import { HttpClientModule } from '@angular/common/http';
import { ApiManagementService } from './shared/services/api-management.service';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

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
    RootStoreModule
  ],
  providers: [ApiManagementService,{
    provide: LOCALE_ID,
    useValue: 'pl' 
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
