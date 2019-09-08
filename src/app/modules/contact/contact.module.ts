import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRouting } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPage } from './pages/contact.page';

@NgModule({
  declarations: [ ContactPage],
  imports: [
    CommonModule, ContactRouting, SharedModule
  ]
})
export class ContactModule { }
