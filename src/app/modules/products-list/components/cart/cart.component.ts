import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from 'src/app/shared/components/popup-dialog/popup-dialog.component';
import { Store, select } from '@ngrx/store';
import { ProductsPageState } from 'src/app/core/store/product/product.reducer';
import { Observable } from 'rxjs';
import {
  selectAllProductsInCart,
  selectTotalCostOfProductsInCart
} from 'src/app/core/store/product/product.selectors';
import {
  RemoveFromList,
  UpdateQuantityInCart,
  SaveCart
} from 'src/app/core/store/product/product.action';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartInProductsComponent implements OnInit {

  productsInCart$: Observable<CartItem[]>;
  totalCostOfProductsInCart$: Observable<number>;
  listName:string = "Twoja lista";

  constructor(
    public dialogRef: MatDialogRef<CartInProductsComponent>,
    private store: Store<ProductsPageState>
  ) {
    this.productsInCart$ = store.pipe(select(selectAllProductsInCart));
    this.totalCostOfProductsInCart$ = store.pipe(
      select(selectTotalCostOfProductsInCart)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onDeleteClick(product) {
    this.store.dispatch(new RemoveFromList(product));
  }

  decreaseQuantityBtnClicked(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      this.store.dispatch(
        new UpdateQuantityInCart({
          cartItemId: cartItem.id,
          updatedQuantity: cartItem.quantity - 1
        })
      );
    }
  }

  increaseQuantityBtnClicked(cartItem) {
    this.store.dispatch(
      new UpdateQuantityInCart({
        cartItemId: cartItem.id,
        updatedQuantity: cartItem.quantity + 1
      })
    );
  }

  onSaveBtnClicked() {
    this.store.dispatch(
      new SaveCart({ listName: this.listName, dialogRef: this.dialogRef })
    );
  }

  onListNameChanged(listName){
    this.listName = listName;
  }
}
