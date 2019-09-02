import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './order.reducer';
import { OrderEffects } from './order.effects';
import { OrderService } from './order.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('order', reducer),
    EffectsModule.forFeature([OrderEffects])
  ],
  providers:[OrderEffects,OrderService]
})
export class OrderStoreModule { }
