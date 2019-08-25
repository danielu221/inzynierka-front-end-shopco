import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface/product.interface';
import { Store, select } from '@ngrx/store';
import { ProductsPageState } from 'src/app/core/store/product/product.reducer';
import { LoadProducts, AddToList, RemoveFromList } from 'src/app/core/store/product/product.action';
import { Observable } from 'rxjs';
import { selectAllProducts, selectAllProductsInCart } from 'src/app/core/store/product/product.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss']
})
export class ProductsListPage implements OnInit {

  products$: Observable<any>;
  productsInCart$: Observable<any>;

  products: Product[];


  constructor(private store: Store<ProductsPageState>) { 
    this.products$ = store.pipe(select(selectAllProducts));
    this.productsInCart$ = store.pipe(select(selectAllProductsInCart))
  }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }

  addToList(product:Product){
    this.store.dispatch(new AddToList(product));
  }

  removeFromList(product:Product){
    this.store.dispatch(new RemoveFromList(product));
  }

}
