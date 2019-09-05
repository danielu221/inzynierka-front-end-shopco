import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth/auth-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './auth/auth.service';
import { OrderStoreModule } from './order/order-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthStoreModule,
    OrderStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers:[AuthService]
})
export class RootStoreModule {}
