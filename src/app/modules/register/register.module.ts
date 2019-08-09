import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouting } from './register-routing.module';
import { RegisterPage } from './pages/register.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterEffects } from 'src/app/core/store/register/register.effects';
import { reducer } from 'src/app/core/store/register/register.reducer';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterService } from 'src/app/core/store/register/register.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule,
    RegisterRouting,
    SharedModule,
    NgrxFormsModule,
    StoreModule.forFeature('register', reducer),
    EffectsModule.forFeature([RegisterEffects])
  ],
  providers:[RegisterService,HttpClient]
})
export class RegisterModule {}
