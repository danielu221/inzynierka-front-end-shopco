import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TakenOrdersPage } from './pages/taken-orders.page';


const routes: Routes = [
    {
        path: '',
        component: TakenOrdersPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TakenOrdersRouting {}
