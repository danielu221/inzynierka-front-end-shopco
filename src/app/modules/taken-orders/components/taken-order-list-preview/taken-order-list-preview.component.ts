import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderSummaryPreviewComponent } from 'src/app/modules/your-orders/components/order-summary-preview/order-summary-preview.component';
import { Store, select } from '@ngrx/store';
import { selectTakenOrderTotalItemsPrice, selectTakenOrderCartItems } from 'src/app/core/store/order/order.selectors';
import { State } from 'src/app/core/store/root-state';

@Component({
  selector: 'app-taken-order-list-preview',
  templateUrl: './taken-order-list-preview.component.html',
  styleUrls: ['./taken-order-list-preview.component.scss']
})
export class TakenOrderListPreviewComponent implements OnInit {

  totalItemsPriceForOrder$: Observable<number>;
  cartItems$: Observable<CartItem[]>;

  constructor(
    public dialogRef: MatDialogRef<OrderSummaryPreviewComponent>,
    private store: Store<State>,

    @Inject(MAT_DIALOG_DATA) public cartPreviewData: any
  ) {
    this.totalItemsPriceForOrder$ = store.pipe(
      select(selectTakenOrderTotalItemsPrice, { orderId: cartPreviewData.orderId })
    );
    this.cartItems$ = store.pipe(
      select(selectTakenOrderCartItems, { orderId: cartPreviewData.orderId })
    );
  }

  ngOnInit() {
    this.cartItems$.subscribe(r => console.log(r));
  }

}
