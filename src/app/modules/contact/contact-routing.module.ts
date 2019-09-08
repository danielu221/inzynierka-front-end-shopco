import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactPage } from './pages/contact.page';

const routes: Routes = [
    {
        path: '',
        component: ContactPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRouting {}
