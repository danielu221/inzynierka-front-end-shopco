import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsListPage } from './pages/products-list.page';


const routes: Routes = [
    {
        path: '',
        component: ProductsListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsListRouting {}
