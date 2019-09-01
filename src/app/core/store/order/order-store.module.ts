import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { orderReducer } from './order.reducer';
import { OrderEffects } from './order.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('order', orderReducer),
    EffectsModule.forFeature([OrderEffects])
  ],
  providers:[OrderEffects]
})
export class OrderStoreModule { }
