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

@NgModule({
  declarations: [CartsPage],
  imports: [CommonModule, CartsRouting,SharedModule,
    StoreModule.forFeature('cartsPageState', CartsPageReducer),
    EffectsModule.forFeature([CartsPageEffects])],
    providers:[CartsService]
})
export class CartsModule {}
