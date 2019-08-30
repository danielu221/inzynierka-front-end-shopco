import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './modules/custom-material.module';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import { IconBtnComponent } from './components/icon-btn/icon-btn.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PublishCartModalComponent } from './components/publish-cart-modal/publish-cart-modal.component';

@NgModule({
  declarations: [ModalWindowComponent, BannerComponent, SubmitBtnComponent, PopupDialogComponent, IconBtnComponent, CartComponent, PublishCartModalComponent],
  imports: [CommonModule, MaterialModule,
    FormsModule],
  exports: [
    ModalWindowComponent,
    BannerComponent,
    MaterialModule,
    SubmitBtnComponent,
    PopupDialogComponent,
    IconBtnComponent,
    CartComponent
  ],

entryComponents: [PopupDialogComponent]
})
export class SharedModule {}
