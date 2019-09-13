import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { HowItWorksPage } from './pages/how-it-works.page';
import { HowItWorksRouting } from './how-it-works-routing.module';

@NgModule({
  declarations: [ HowItWorksPage],
  imports: [
    CommonModule, HowItWorksRouting, SharedModule
  ]
})
export class HowItWorksModule { }
