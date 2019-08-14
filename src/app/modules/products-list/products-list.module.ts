import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsListPage } from './pages/products-list.page';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListRouting } from './products-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';


@NgModule({
  declarations: [ProductsListComponent, ProductComponent, ProductsListPage, FilterBarComponent],
  imports: [CommonModule, ProductsListRouting,SharedModule]
})
export class ProductsListModule {}
