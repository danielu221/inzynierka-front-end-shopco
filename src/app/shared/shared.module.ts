import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './modules/custom-material.module';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { IconBtnComponent } from './components/icon-btn/icon-btn.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PublishCartModalComponent } from './components/publish-cart-modal/publish-cart-modal.component';
import { NgrxFormsModule } from 'ngrx-forms';

import { CartPreviewComponentShared } from './components/cart-preview/cart-preview.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@NgModule({
  declarations: [
    ModalWindowComponent,
    BannerComponent,
    SubmitBtnComponent,
    IconBtnComponent,
    CartComponent,
    PublishCartModalComponent,
    CartPreviewComponentShared,
    OrderSummaryComponent
  ],
  imports: [CommonModule, MaterialModule, FormsModule, NgrxFormsModule],
  exports: [
    ModalWindowComponent,
    BannerComponent,
    MaterialModule,
    SubmitBtnComponent,
    IconBtnComponent,
    CartComponent,
    OrderSummaryComponent
  ]
})
export class SharedModule {}
