import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ModalWindowComponent, BannerComponent],
  imports: [CommonModule, MatInputModule],
  exports: [ModalWindowComponent, BannerComponent, MatInputModule]
})
export class SharedModule {}
