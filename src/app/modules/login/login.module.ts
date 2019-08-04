import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './pages/login.page';
import { LoginRouting } from './login-routing.module';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, LoginRouting]
})
export class LoginModule {}
