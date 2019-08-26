import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsListPage } from './pages/products-list.page';
import { ProductsListRouting } from './products-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsPageReducer } from 'src/app/core/store/product/product.reducer';
import { ProductsPageEffects } from 'src/app/core/store/product/product.effects';
import { ProductService } from 'src/app/core/store/product/product.service';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListPage,
    FilterBarComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsListRouting,
    SharedModule,
    StoreModule.forFeature('productsPageState', ProductsPageReducer),
    EffectsModule.forFeature([ProductsPageEffects])
  ],
  providers:[
    ProductService
  ],
  entryComponents:[CartComponent]
})
export class ProductsListModule {}
