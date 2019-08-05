import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { RootStoreModule } from './core/store';
import { HttpClientModule } from '@angular/common/http';
import { ApiManagementService } from './shared/services/api-management.service';

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
  providers: [ApiManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
