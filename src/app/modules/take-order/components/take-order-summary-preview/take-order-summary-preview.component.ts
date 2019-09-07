import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { Observable } from 'rxjs';
import { selectOrderToTakeTotalItemsPrice, selectOrderToTakeCartItems } from 'src/app/core/store/order/order.selectors';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';

@Component({
  selector: 'app-take-order-summary-preview',
  templateUrl: './take-order-summary-preview.component.html',
  styleUrls: ['./take-order-summary-preview.component.scss']
})
export class TakeOrderSummaryPreviewComponent implements OnInit {
  totalItemsPriceForOrder$: Observable<number>;
  cartItems$: Observable<CartItem[]>;

  constructor(
    public dialogRef: MatDialogRef<TakeOrderSummaryPreviewComponent>,
    private store: Store<State>,

    @Inject(MAT_DIALOG_DATA) public takeOrderSummaryPreviewData: any
  ) {
    this.totalItemsPriceForOrder$ = store.pipe(
      select(selectOrderToTakeTotalItemsPrice, { orderId: takeOrderSummaryPreviewData.orderId })
    );
    this.cartItems$ = store.pipe(
      select(selectOrderToTakeCartItems, { orderId: takeOrderSummaryPreviewData.orderId })
    );
  }

  ngOnInit() {
    this.cartItems$.subscribe(r => console.log(r));
  }
}
