import { Component, OnInit, Inject } from '@angular/core';
import { Order } from 'src/app/shared/interface/order.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReceiveOrderPopupComponent } from 'src/app/modules/your-orders/components/receive-order-popup/receive-order-popup.component';

@Component({
  selector: 'app-get-money',
  templateUrl: './get-money.component.html',
  styleUrls: ['./get-money.component.scss']
})
export class GetMoneyComponent implements OnInit {

  
  order:Order;

  constructor(
    public dialogRef: MatDialogRef<GetMoneyComponent>, 
    @Inject(MAT_DIALOG_DATA) public orderPopupData: any,) {
      this.order = orderPopupData.order;
     }

  ngOnInit() {
    console.log(this.order)
  }

  onReturnClick(){
    this.dialogRef.close();
  }

  onGetMoneyBtnClick(){

  }
}
