import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourOrdersRouting } from './your-orders-routing.module';
import { YourOrdersPage } from './pages/your-orders.page';

@NgModule({
  declarations: [YourOrdersPage],
  imports: [CommonModule, YourOrdersRouting]
})
export class YourOrdersModule {}
