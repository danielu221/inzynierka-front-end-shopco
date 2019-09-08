import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/store/auth/auth-guard.service';


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
},{
  path: 'products-list',
  canActivate: [AuthGuardService] ,
  loadChildren: './modules/products-list/products-list.module#ProductsListModule'
},{
  path: 'your-orders',
  canActivate: [AuthGuardService] ,
  loadChildren: './modules/your-orders/your-orders.module#YourOrdersModule'
},
{
  path: 'carts',
  canActivate: [AuthGuardService] ,
  loadChildren: './modules/carts/carts.module#CartsModule'
},
{
  path: 'take-order',
  canActivate: [AuthGuardService] ,
  loadChildren: './modules/take-order/take-order.module#TakeOrderModule'
},
{
  path: 'taken-orders',
  canActivate: [AuthGuardService] ,
  loadChildren: './modules/taken-orders/taken-orders.module#TakenOrdersModule'
},
{
  path: 'contact',
  loadChildren: './modules/contact/contact.module#ContactModule'
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
