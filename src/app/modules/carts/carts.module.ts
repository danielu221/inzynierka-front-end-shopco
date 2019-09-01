import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsPage } from './pages/carts.page';
import { CartsRouting } from './carts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CartsPageReducer } from 'src/app/core/store/carts/carts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartsPageEffects } from 'src/app/core/store/carts/carts.effects';
import { CartsService } from 'src/app/core/store/carts/carts.service';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { PublishCartModalComponent } from 'src/app/shared/components/publish-cart-modal/publish-cart-modal.component';
import { OrderStoreModule } from 'src/app/core/store/order/order-store.module';

@NgModule({
  declarations: [CartsPage, CartPreviewComponent],
  imports: [
    CommonModule,
    CartsRouting,
    SharedModule,
    StoreModule.forFeature('cartsPageState', CartsPageReducer),
    EffectsModule.forFeature([CartsPageEffects])
  ],
  providers: [CartsService],

  entryComponents: [CartPreviewComponent,PublishCartModalComponent]
})
export class CartsModule {}
