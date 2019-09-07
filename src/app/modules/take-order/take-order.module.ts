import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TakeOrderRouting } from './take-order-routing.module';
import { TakeOrderPage } from './pages/take-order.page';
import { OrderSummaryPreviewComponent } from '../your-orders/components/order-summary-preview/order-summary-preview.component';
import { TakeOrderSummaryPreviewComponent } from './components/take-order-summary-preview/take-order-summary-preview.component';


@NgModule({
  declarations: [TakeOrderPage, TakeOrderSummaryPreviewComponent],
  imports: [
    CommonModule,
    TakeOrderRouting,
    SharedModule,
  ],
  entryComponents:[TakeOrderSummaryPreviewComponent]
})
export class TakeOrderModule {}
