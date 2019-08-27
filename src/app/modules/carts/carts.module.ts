import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsPage } from './pages/carts.page';
import { CartsRouting } from './carts-routing.module';

@NgModule({
  declarations: [CartsPage],
  imports: [CommonModule, CartsRouting]
})
export class CartsModule {}
