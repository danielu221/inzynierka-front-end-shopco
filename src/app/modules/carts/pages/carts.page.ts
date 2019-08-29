import { Component, OnInit } from '@angular/core';
import { LoadCarts, RemoveCart } from 'src/app/core/store/carts/carts.actions';
import { Store, select } from '@ngrx/store';
import { CartsPageState } from 'src/app/core/store/carts/carts.reducer';
import { STORAGE_USER } from 'src/app/shared/variables/local-storage.variables';
import { Observable } from 'rxjs';
import { selectAllCarts } from '../../../core/store/carts/carts.selectors';
import { MatDialog } from '@angular/material/dialog';
import { CartPreviewComponent } from '../components/cart-preview/cart-preview.component';
import { Cart } from 'src/app/shared/interface/cart.interface';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.page.html',
  styleUrls: ['./carts.page.scss']
})
export class CartsPage implements OnInit {
  displayedColumns: string[] = [
    'cartName',
    'productsInCart',
    'details',
    'delete',
    'price'
  ];
  carts$: Observable<any>;
  constructor(private store: Store<CartsPageState>, public dialog: MatDialog) {
    this.carts$ = store.pipe(select(selectAllCarts));
  }

  ngOnInit() {
    this.carts$.subscribe(r => {
      console.log(r);
    });
    this.store.dispatch(
      new LoadCarts({
        userId: JSON.parse(localStorage.getItem(STORAGE_USER)).id
      })
    );
  }

  onPreviewIconClick(cart:Cart) {
    const dialogRef = this.dialog.open(CartPreviewComponent, {
      width: '800px',
      height: '650px',
      data: {cartId:cart.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDeleteClick(cart:Cart){
    this.store.dispatch(new RemoveCart({id:cart.id}) )
  }
}
