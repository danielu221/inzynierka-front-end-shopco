import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './modules/custom-material.module';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import { IconBtnComponent } from './components/icon-btn/icon-btn.component';

@NgModule({
  declarations: [ModalWindowComponent, BannerComponent, SubmitBtnComponent, PopupDialogComponent, IconBtnComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    ModalWindowComponent,
    BannerComponent,
    MaterialModule,
    SubmitBtnComponent,
    PopupDialogComponent,
    IconBtnComponent
  ],

entryComponents: [PopupDialogComponent]
})
export class SharedModule {}
