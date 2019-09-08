import { Component, OnInit, Inject } from '@angular/core';
import { Order } from 'src/app/shared/interface/order.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReceiveOrderPopupComponent } from 'src/app/modules/your-orders/components/receive-order-popup/receive-order-popup.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { SendCode } from 'src/app/core/store/order/order.action';

@Component({
  selector: 'app-get-money',
  templateUrl: './get-money.component.html',
  styleUrls: ['./get-money.component.scss']
})
export class GetMoneyComponent implements OnInit {

  order:Order;
  code:string='';

  constructor(
    public dialogRef: MatDialogRef<GetMoneyComponent>, 
    @Inject(MAT_DIALOG_DATA) public orderPopupData: any,
    private store:Store<State>) {
      this.order = orderPopupData.order;
     }

  ngOnInit() {
    console.log(this.order)
  }

  onReturnClick(){
    this.dialogRef.close();
  }

  onGetMoneyBtnClick(){
    this.store.dispatch(new SendCode({orderId:this.order.id,code:this.code}))
  }
}
