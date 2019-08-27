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
},{
  path: 'products-list',
  loadChildren: './modules/products-list/products-list.module#ProductsListModule'
},{
  path: 'your-orders',
  loadChildren: './modules/your-orders/your-orders.module#YourOrdersModule'
},
{
  path: 'carts',
  loadChildren: './modules/carts/carts.module#CartsModule'
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
