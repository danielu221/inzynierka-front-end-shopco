import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakenOrdersPage } from './pages/taken-orders.page';
import { TakenOrdersRouting } from './taken-orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TakenOrderListPreviewComponent } from './components/taken-order-list-preview/taken-order-list-preview.component';
import { GetMoneyComponent } from './components/get-money/get-money.component';

@NgModule({
  declarations: [
    TakenOrdersPage,
    TakenOrderListPreviewComponent,
    GetMoneyComponent
  ],
  imports: [CommonModule, TakenOrdersRouting, SharedModule],
  entryComponents: [TakenOrderListPreviewComponent, GetMoneyComponent]
})
export class TakenOrdersModule {}
