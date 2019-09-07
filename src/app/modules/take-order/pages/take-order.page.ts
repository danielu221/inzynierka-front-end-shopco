import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { MatDialog } from '@angular/material/dialog';
import {
  GetOrdersToTake,
  TakeOrder
} from 'src/app/core/store/order/order.action';
import { selectOrdersToTake } from 'src/app/core/store/order/order.selectors';
import { Order } from 'src/app/shared/interface/order.interface';
import { TakeOrderSummaryPreviewComponent } from '../components/take-order-summary-preview/take-order-summary-preview.component';

@Component({
  selector: 'app-take-order-page',
  templateUrl: './take-order.page.html',
  styleUrls: ['./take-order.page.scss']
})
export class TakeOrderPage implements OnInit {
  ordersToTake$: Observable<any>;
  displayedColumns: string[] = [
    'address',
    'deliveryDate',
    'totalItemsPrice',
    'preview',
    'contact',
    'take'
  ];
  constructor(private store: Store<State>, private dialog: MatDialog) {
    this.ordersToTake$ = store.pipe(select(selectOrdersToTake));
  }

  ngOnInit() {
    this.store.dispatch(new GetOrdersToTake());
  }

  onPreviewIconClick(order: Order) {
    this.dialog.open(TakeOrderSummaryPreviewComponent, {
      width: '800px',
      height: '650px',
      data: { orderId: order.id }
    });
  }

  onTakeOrderButtonClick(order: Order) {
    this.store.dispatch(new TakeOrder({ orderId: order.id }));
  }
}
