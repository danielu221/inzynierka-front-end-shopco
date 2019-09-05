import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { Observable } from 'rxjs';
import { selectMyOrders } from 'src/app/core/store/order/order.selectors';
import { GetMyOrders } from 'src/app/core/store/order/order.action';
import { MatDialog } from '@angular/material/dialog';
import { OrderSummaryPreviewComponent } from '../components/order-summary-preview/order-summary-preview.component';
import { Order } from 'src/app/shared/interface/order.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.page.html',
  styleUrls: ['./your-orders.page.scss']
})
export class YourOrdersPage implements OnInit {
  myOrders$: Observable<any>;
  displayedColumns: string[] = [
    'creationDate',
    'dispositionDeliveryAddress',
    'status',
    'totalItemsPrice',
    'preview',
    'supplier',
    'action',
    'problem'
  ];
  dataSource = ELEMENT_DATA;
  constructor(private store: Store<State>,private dialog:MatDialog) {
    this.myOrders$ = store.pipe(select(selectMyOrders));

  }

  ngOnInit() {
    this.store.dispatch(new GetMyOrders());
    this.myOrders$.subscribe(r=>console.log(r))
  }

  onPreviewIconClick(order:Order) {
    this.dialog.open(OrderSummaryPreviewComponent, {
      width: '800px',
      height: '650px',
      data: {orderId:order.id}
    });
  }
}
