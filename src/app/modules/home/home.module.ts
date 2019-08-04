import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home.page';
import { HomeRouting } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ HomePage],
  imports: [
    CommonModule, HomeRouting, SharedModule
  ]
})
export class HomeModule { }
