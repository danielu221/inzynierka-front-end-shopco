import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartsPage } from './pages/carts.routing';

const routes: Routes = [
    {
        path: '',
        component: CartsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartsRouting {}
