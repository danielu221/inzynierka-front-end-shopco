import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouting } from './register-routing.module';
import { RegisterPage } from './pages/register.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule, RegisterRouting, SharedModule
  ]
})
export class RegisterModule { }
