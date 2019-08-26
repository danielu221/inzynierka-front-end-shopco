import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){

  }


}
