import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiManagementService, endpoints } from 'src/app/shared/services/api-management.service';
import { Product } from 'src/app/shared/interface/product.interface';
import { Store, select } from '@ngrx/store';
import { ProductsPageState } from 'src/app/core/store/product/product.reducer';
import { LoadProducts } from 'src/app/core/store/product/product.action';
import { Observable } from 'rxjs';
import { selectAllProducts } from 'src/app/core/store/product/product.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss']
})
export class ProductsListPage implements OnInit {

  products$: Observable<any>;

  products: Product[];


  constructor(private store: Store<ProductsPageState>) { 
    this.products$ = store.pipe(select(selectAllProducts));
  }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }

}
