import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourOrdersRouting } from './your-orders-routing.module';
import { YourOrdersPage } from './pages/your-orders.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderSummaryPreviewComponent } from './components/order-summary-preview/order-summary-preview.component';
import { ReceiveOrderPopupComponent } from './components/receive-order-popup/receive-order-popup.component';
import { SendProblemComponent } from './components/send-problem/send-problem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [YourOrdersPage, OrderSummaryPreviewComponent, ReceiveOrderPopupComponent, SendProblemComponent],
  imports: [CommonModule, YourOrdersRouting,SharedModule,FormsModule],
  entryComponents:[OrderSummaryPreviewComponent,ReceiveOrderPopupComponent,SendProblemComponent]
})
export class YourOrdersModule {}
