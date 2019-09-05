import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth/auth-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './auth/auth.service';
import { OrderStoreModule } from './order/order-store.module';
import { CartsPageReducer } from './carts/carts.reducer';
import { CartsPageEffects } from './carts/carts.effects';
import { CartsService } from './carts/carts.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublishCartModalComponent } from 'src/app/shared/components/publish-cart-modal/publish-cart-modal.component';
import { CartPreviewComponent } from 'src/app/modules/carts/components/cart-preview/cart-preview.component';

@NgModule({
  declarations: [CartPreviewComponent],
  imports: [
    CommonModule,
    AuthStoreModule,
    OrderStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SharedModule,
    StoreModule.forFeature('cartsPageState', CartsPageReducer),
    EffectsModule.forFeature([CartsPageEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers:[AuthService,CartsService],
  entryComponents:[PublishCartModalComponent,CartPreviewComponent]
})
export class RootStoreModule {}
