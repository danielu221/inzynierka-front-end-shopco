import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './modules/custom-material.module';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';

@NgModule({
  declarations: [ModalWindowComponent, BannerComponent, SubmitBtnComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    ModalWindowComponent,
    BannerComponent,
    MaterialModule,
    SubmitBtnComponent
  ]
})
export class SharedModule {}
