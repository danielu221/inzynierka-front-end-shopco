import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { Store, select } from '@ngrx/store';
import { CartsPageState } from 'src/app/core/store/carts/carts.reducer';
import { selectCart, selectCartItemsForCart, selectTotalItemsPrice } from 'src/app/core/store/carts/carts.selectors';

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
    this.productsInCart$.subscribe(r=>console.log(r))
  }

  // onDeleteClick(product) {
  //   this.store.dispatch(new RemoveFromList(product));
  // }

  // decreaseQuantityBtnClicked(cartItem: CartItem) {
  //   if (cartItem.quantity > 1) {
  //     this.store.dispatch(
  //       new UpdateQuantityInCart({
  //         cartItemId: cartItem.id,
  //         updatedQuantity: cartItem.quantity - 1
  //       })
  //     );
  //   }
  // }

  // increaseQuantityBtnClicked(cartItem) {
  //   this.store.dispatch(
  //     new UpdateQuantityInCart({
  //       cartItemId: cartItem.id,
  //       updatedQuantity: cartItem.quantity + 1
  //     })
  //   );
  // }

  // onSaveBtnClicked() {
  //   this.store.dispatch(
  //     new SaveCart({ listName: this.listName, dialogRef: this.dialogRef })
  //   );
  // }

  // onListNameChanged(listName){
  //   this.listName = listName;
  // }

}
