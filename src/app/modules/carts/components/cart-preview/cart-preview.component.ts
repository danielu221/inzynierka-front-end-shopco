import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
import { Store, select } from '@ngrx/store';
import { CartsPageState } from 'src/app/core/store/carts/carts.reducer';
import { selectCart, selectCartItemsForCart, selectTotalItemsPrice, selectCartName } from 'src/app/core/store/carts/carts.selectors';
import { RemoveFromCart, UpdateQuantityInCartPreview, UpdateCart, SaveCartAndRedirectToOrder } from 'src/app/core/store/carts/carts.actions';
import { PublishCartModalComponent } from 'src/app/shared/components/publish-cart-modal/publish-cart-modal.component';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {

  productsInCart$: Observable<CartItem[]>;
  totalCostOfProductsInCart$: Observable<number>;
  listName:string = "Twoja lista";
  cartName$:Observable<string>

  constructor(
    public dialogRef: MatDialogRef<CartPreviewComponent>,
    private store: Store<CartsPageState>,
    @Inject(MAT_DIALOG_DATA) public cartPreviewData: any,
    public dialog: MatDialog
  ) {
    this.productsInCart$ = store.pipe(select(selectCartItemsForCart,{cartId:cartPreviewData.cartId}));
    this.totalCostOfProductsInCart$ = store.pipe(
      select(selectTotalItemsPrice,{cartId:cartPreviewData.cartId})
    );
    this.cartName$ = store.pipe(select(selectCartName,{cartId:cartPreviewData.cartId}))
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.cartName$.subscribe(cartName => 
      this.listName=cartName)
  }

  onDeleteClick(cartItem:CartItem) {
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

  onSaveBtnClicked() {
    this.store.dispatch(
      new UpdateCart({ cartId: this.cartPreviewData.cartId, dialogRef: this.dialogRef,cartName:this.listName })
    );
  }

  onOrderBtnClick(){
    this.store.dispatch(
      new SaveCartAndRedirectToOrder({ cartId: this.cartPreviewData.cartId, dialogRef: this.dialogRef,cartName:this.listName })
    );
    // const dialogRef = this.dialog.open(PublishCartModalComponent, {
    //   width: '800px',
    //   height: '650px',
    // });

  }
  // onListNameChanged(listName){
  //   this.listName = listName;
  // }

}
