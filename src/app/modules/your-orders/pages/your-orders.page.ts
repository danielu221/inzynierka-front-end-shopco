import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { Observable } from 'rxjs';
import { selectMyOrders } from 'src/app/core/store/order/order.selectors';
import { GetMyOrders } from 'src/app/core/store/order/order.action';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderSummaryPreviewComponent } from '../components/order-summary-preview/order-summary-preview.component';
import { Order } from 'src/app/shared/interface/order.interface';
import { ReceiveOrderPopupComponent } from '../components/receive-order-popup/receive-order-popup.component';
import { SendProblemComponent } from '../components/send-problem/send-problem.component';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.page.html',
  styleUrls: ['./your-orders.page.scss']
})
export class YourOrdersPage implements OnInit {
  myOrders$: Observable<any>;
  displayedColumns: string[] = [
    'creationDate',
    'deliveryDate',
    'dispositionDeliveryAddress',
    'status',
    'totalItemsPrice',
    'preview',
    'supplier',
    'action',
    'problem'
  ];
  constructor(private store: Store<State>,private dialog:MatDialog,) {
    this.myOrders$ = store.pipe(select(selectMyOrders));

  }

  ngOnInit() {
    this.store.dispatch(new GetMyOrders());
  }

  onPreviewIconClick(order:Order) {
    this.dialog.open(OrderSummaryPreviewComponent, {
      width: '800px',
      height: '650px',
      data: {orderId:order.id}
    });
  }

  onReceiveIconClick(order:Order) {
    this.dialog.open(ReceiveOrderPopupComponent, {
      width: '650px',
      height: '600px',
      data: {order:order}
    });
  }

  onSendProblemIconClick(order:Order){
    this.dialog.open(SendProblemComponent, {
      width: '650px',
      height: '600px',
      data: {order:order}
    });
  }
}
