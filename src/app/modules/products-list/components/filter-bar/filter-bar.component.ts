import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constructor } from 'q';
import { MatDialog } from '@angular/material/dialog';
import { CartInProductsComponent } from '../cart/cart.component';
import { Store } from '@ngrx/store';
import { ProductsPageState } from 'src/app/core/store/product/product.reducer';
import { SearchForProduct } from 'src/app/core/store/product/product.action';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Input()
  numberOfProducts = 0;

  @Output()
  listIconClicked: EventEmitter<any> = new EventEmitter();

  searchValue = '';

  constructor(public dialog: MatDialog,private store: Store<ProductsPageState> ) {}

  ngOnInit() {}

  handleListIconClicked() {
    const dialogRef = this.dialog.open(CartInProductsComponent, {
      width: '800px',
      height: '650px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSearchClick(){
    console.log(this.searchValue)
    this.store.dispatch(new SearchForProduct({searchValue:this.searchValue}));
  }
}
