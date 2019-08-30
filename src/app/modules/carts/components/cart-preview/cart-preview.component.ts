import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { Store, select } from '@ngrx/store';
import { CartsPageState } from 'src/app/core/store/carts/carts.reducer';
import { selectCart, selectCartItemsForCart, selectTotalItemsPrice } from 'src/app/core/store/carts/carts.selectors';
import { RemoveFromCart, UpdateQuantityInCartPreview } from 'src/app/core/store/carts/carts.actions';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {

  productsInCart$: Observable<CartItem[]>;
  totalCostOfProductsInCart$: Observable<number>;
  listName:string = "Twoja lista";

  constructor(
    public dialogRef: MatDialogRef<CartPreviewComponent>,
    private store: Store<CartsPageState>,
    @Inject(MAT_DIALOG_DATA) public cartPreviewData: any
  ) {
    this.productsInCart$ = store.pipe(select(selectCartItemsForCart,{cartId:cartPreviewData.cartId}));
    this.totalCostOfProductsInCart$ = store.pipe(
      select(selectTotalItemsPrice,{cartId:cartPreviewData.cartId})
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onDeleteClick(cartItem:CartItem) {
    console.log(cartItem)
    this.store.dispatch(new RemoveFromCart({cartId:this.cartPreviewData.cartId,cartItemId:cartItem.cartItemId}));
  }

  decreaseQuantityBtnClicked(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      this.store.dispatch(
        new UpdateQuantityInCartPreview({
          cartId: this.cartPreviewData.cartId,
          cartItemId: cartItem.id,
          updatedQuantity: cartItem.quantity - 1
        })
      );
    }
  }

  increaseQuantityBtnClicked(cartItem) {
    this.store.dispatch(
      new UpdateQuantityInCartPreview({
        cartId: this.cartPreviewData.cartId,
        cartItemId: cartItem.id,
        updatedQuantity: cartItem.quantity + 1
      })
    );
  }

  // onSaveBtnClicked() {
  //   this.store.dispatch(
  //     new SaveCart({ listName: this.listName, dialogRef: this.dialogRef })
  //   );
  // }

  // onListNameChanged(listName){
  //   this.listName = listName;
  // }

}
