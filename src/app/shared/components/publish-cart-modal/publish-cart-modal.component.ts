import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartPreviewComponent } from 'src/app/modules/carts/components/cart-preview/cart-preview.component';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { OpenCartDialog } from 'src/app/core/store/carts/carts.actions';
import { selectCartInformation, selectFormOrder, selectIsLoading } from 'src/app/core/store/order/order.selectors';
import { Observable } from 'rxjs';
import { Order } from '../../interface/order.interface';
import { FormGroupState } from 'ngrx-forms';
import { FormOrder } from 'src/app/core/store/order/order.reducer';
import { take, filter, map } from 'rxjs/operators';
import { PublishOrder } from 'src/app/core/store/order/order.action';
import { getDateTimeNowFormatted } from '../../utils';

@Component({
  selector: 'app-publish-cart-modal',
  templateUrl: './publish-cart-modal.component.html',
  styleUrls: ['./publish-cart-modal.component.scss']
})
export class PublishCartModalComponent implements OnInit {
  cartInformation$: Observable<any>;
  cartId: number;
  formState$: Observable<FormGroupState<FormOrder>>;
  isLoading$:Observable<boolean>;

  constructor(private dialog: MatDialog, private store: Store<State>) {
    this.cartInformation$ = store.pipe(select(selectCartInformation));
    this.formState$ = store.pipe(select(selectFormOrder));
    this.isLoading$ = store.pipe(select(selectIsLoading))
  }

  ngOnInit() {
    this.cartInformation$.subscribe((cartInformation) => {
      this.cartId = cartInformation.cartId;
    });
  }
  onPreviewListClick() {
    this.store.dispatch(new OpenCartDialog({ cartId: this.cartId }));
  }
  submit() {
    this.formState$
        .pipe(
            take(1),
            filter(s => s.isValid),
            map(fs =>  new PublishOrder({
              dispositionDeliveryAddress: fs.value.address,
              listId: this.cartId,
              creationDatetime: getDateTimeNowFormatted(),
              deliveryDatetime: "2019-07-24 14:00:00",
              asap: fs.value.asap
            }))
        )
        .subscribe(this.store);
}
}
