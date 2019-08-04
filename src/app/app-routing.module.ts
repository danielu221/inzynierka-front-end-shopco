import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path: 'home',
      loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule'
},{
  path: 'login',
  loadChildren: './modules/login/login.module#LoginModule'
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
