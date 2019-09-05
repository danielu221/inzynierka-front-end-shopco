import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourOrdersRouting } from './your-orders-routing.module';
import { YourOrdersPage } from './pages/your-orders.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderSummaryPreviewComponent } from './components/order-summary-preview/order-summary-preview.component';

@NgModule({
  declarations: [YourOrdersPage, OrderSummaryPreviewComponent],
  imports: [CommonModule, YourOrdersRouting,SharedModule],
  entryComponents:[OrderSummaryPreviewComponent]
})
export class YourOrdersModule {}
