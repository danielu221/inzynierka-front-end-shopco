import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HowItWorksPage } from './pages/how-it-works.page';


const routes: Routes = [
    {
        path: '',
        component: HowItWorksPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HowItWorksRouting {}
