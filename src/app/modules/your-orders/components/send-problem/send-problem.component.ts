import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { Order } from 'src/app/shared/interface/order.interface';
import { SendProblem } from 'src/app/core/store/order/order.action';

@Component({
  selector: 'app-send-problem',
  templateUrl: './send-problem.component.html',
  styleUrls: ['./send-problem.component.scss']
})
export class SendProblemComponent implements OnInit {
  problemDescription = '';
  order: Order;

  constructor(
    public dialogRef: MatDialogRef<SendProblemComponent>,
    @Inject(MAT_DIALOG_DATA) public sendProblemPopupData: any,
    private store: Store<State>
  ) {
    this.order = sendProblemPopupData.order;
  }

  ngOnInit() {}

  onReturnClick() {
    this.dialogRef.close();
  }

  onSendClick() {
    this.store.dispatch(
      new SendProblem({ orderId: this.order.id, description: this.problemDescription })
    );
  }
}
