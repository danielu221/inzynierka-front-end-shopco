import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { State } from 'src/app/core/store/root-state';
import { selectTakenOrders } from 'src/app/core/store/order/order.selectors';
import { GetTakenOrders } from 'src/app/core/store/order/order.action';
import { Order } from 'src/app/shared/interface/order.interface';
import { TakenOrderListPreviewComponent } from '../components/taken-order-list-preview/taken-order-list-preview.component';
import { GetMoneyComponent } from '../components/get-money/get-money.component';

@Component({
  selector: 'app-taken-orders',
  templateUrl: './taken-orders.page.html',
  styleUrls: ['./taken-orders.page.scss']
})
export class TakenOrdersPage implements OnInit {
  takenOrders$: Observable<any>;
  displayedColumns: string[] = [
    'address',
    'deliveryDate',
    'totalItemsPrice',
    'preview',
    'contact',
    'status',
    'getMoney'
  ];
  constructor(private store: Store<State>, private dialog: MatDialog) { 
    this.takenOrders$ = store.pipe(select(selectTakenOrders));
  }

  ngOnInit() {
    this.store.dispatch(new GetTakenOrders())
  }

  onGetMoneyIconClick(order:Order){
    this.dialog.open(GetMoneyComponent, {
      width: '800px',
      height: '420px',
      data: { order:order}
    });
  }

  onPreviewIconClick(order: Order) {
    this.dialog.open(TakenOrderListPreviewComponent, {
      width: '800px',
      height: '650px',
      data: { orderId: order.id }
    });
  }

}
