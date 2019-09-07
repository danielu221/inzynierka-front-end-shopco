import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TakeOrderPage } from './pages/take-order.page';


const routes: Routes = [
    {
        path: '',
        component: TakeOrderPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TakeOrderRouting {}
