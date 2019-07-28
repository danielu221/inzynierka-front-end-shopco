import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { HomePage } from './pages/home.page';
import { HomeRouting } from './home-routing.module';

@NgModule({
  declarations: [MainBannerComponent, HomePage],
  imports: [
    CommonModule, HomeRouting
  ]
})
export class HomeModule { }
