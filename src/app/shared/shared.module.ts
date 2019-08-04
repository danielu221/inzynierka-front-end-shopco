import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

@NgModule({
  declarations: [ModalWindowComponent],
  imports: [CommonModule],
  exports: [ModalWindowComponent]
})
export class SharedModule {}
