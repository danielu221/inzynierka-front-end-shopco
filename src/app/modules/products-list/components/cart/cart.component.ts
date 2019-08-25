import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from 'src/app/shared/components/popup-dialog/popup-dialog.component';
import { Store, select } from '@ngrx/store';
import { ProductsPageState } from 'src/app/core/store/product/product.reducer';
import { Observable } from 'rxjs';
import { selectAllProductsInCart } from 'src/app/core/store/product/product.selectors';
import {
  RemoveFromList,
  UpdateQuantityInCart
} from 'src/app/core/store/product/product.action';
import { CartItem } from 'src/app/shared/interface/cart-item.interface';
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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = [
    'picture',
    'name',
    'quantity',
    'delete',
    'price'
  ];
  dataSource = ELEMENT_DATA;
  productsInCart$: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<CartComponent>,
    private store: Store<ProductsPageState>
  ) {
    this.productsInCart$ = store.pipe(select(selectAllProductsInCart));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.productsInCart$.subscribe(r => console.log(r));
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

}
