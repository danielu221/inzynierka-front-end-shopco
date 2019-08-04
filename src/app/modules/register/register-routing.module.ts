import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterPage } from './pages/register.page';

const routes: Routes = [
    {
        path: '',
        component: RegisterPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRouting {}
