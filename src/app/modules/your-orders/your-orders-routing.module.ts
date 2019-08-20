import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { YourOrdersPage } from './pages/your-orders.page';

const routes: Routes = [
    {
        path: '',
        component: YourOrdersPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YourOrdersRouting {}
