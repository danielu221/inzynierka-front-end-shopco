import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './pages/login.page';
import { LoginRouting } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/core/store/login/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from 'src/app/core/store/login/login.effects';
import { LoginService } from 'src/app/core/store/login/login.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    LoginRouting,
    SharedModule,
    NgrxFormsModule,
    StoreModule.forFeature('login', reducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers:[LoginService,HttpClient]
})
export class LoginModule {}
