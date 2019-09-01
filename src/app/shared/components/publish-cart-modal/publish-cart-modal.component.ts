import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartPreviewComponent } from 'src/app/modules/carts/components/cart-preview/cart-preview.component';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { OpenCartDialog } from 'src/app/core/store/carts/carts.actions';
import { selectCurrentOrder } from 'src/app/core/store/order/order.selectors';
import { Observable } from 'rxjs';
import { Order } from '../../interface/order.interface';

@Component({
  selector: 'app-publish-cart-modal',
  templateUrl: './publish-cart-modal.component.html',
  styleUrls: ['./publish-cart-modal.component.scss']
})
export class PublishCartModalComponent implements OnInit {
  currentOrder$: Observable<Order>;
  cartId: number;

  constructor(private dialog: MatDialog, private store: Store<State>) {
    this.currentOrder$ = store.pipe(select(selectCurrentOrder));
  }

  ngOnInit() {
    this.currentOrder$.subscribe((order: Order) => {
      this.cartId = order.cartId;
      console.log(order)
    });
  }
  onPreviewListClick() {
    this.store.dispatch(new OpenCartDialog({ cartId: this.cartId }));
  }
}
