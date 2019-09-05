import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/order/order.reducer';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import {
  selectMyOrderCartItems,
  selectMyOrderTotalItemsPrice
} from 'src/app/core/store/order/order.selectors';

@Component({
  selector: 'app-order-summary-preview',
  templateUrl: './order-summary-preview.component.html',
  styleUrls: ['./order-summary-preview.component.scss']
})
export class OrderSummaryPreviewComponent implements OnInit {
  totalItemsPriceForOrder$: Observable<number>;
  cartItems$: Observable<CartItem[]>;

  constructor(
    public dialogRef: MatDialogRef<OrderSummaryPreviewComponent>,
    private store: Store<State>,

    @Inject(MAT_DIALOG_DATA) public cartPreviewData: any
  ) {
    this.totalItemsPriceForOrder$ = store.pipe(
      select(selectMyOrderTotalItemsPrice, { orderId: cartPreviewData.orderId })
    );
    this.cartItems$ = store.pipe(
      select(selectMyOrderCartItems, { orderId: cartPreviewData.orderId })
    );
  }

  ngOnInit() {
    this.cartItems$.subscribe(r => console.log(r));
  }
}
