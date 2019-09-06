import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/shared/interface/order.interface';

@Component({
  selector: 'app-receive-order-popup',
  templateUrl: './receive-order-popup.component.html',
  styleUrls: ['./receive-order-popup.component.scss']
})
export class ReceiveOrderPopupComponent implements OnInit {

  order:Order;

  constructor(
    public dialogRef: MatDialogRef<ReceiveOrderPopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public orderPopupData: any,) {
      this.order = orderPopupData.order;
     }

  ngOnInit() {
    console.log(this.order)
  }

  onReturnClick(){
    this.dialogRef.close();
  }
}
