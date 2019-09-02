import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as OrderActions from './order.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  PublishOrderRequestBody,
  PublishOrderSuccess,
  PublishOrderFailure
} from './order.action';
import { OrderService } from './order.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ToastConfig } from 'src/app/shared/interface/toast-config.interface';
import { ToasterService } from 'angular2-toaster';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

@Injectable()
export class OrderEffects {
  @Effect()
  publishOrder = this.actions$.pipe(
    ofType<OrderActions.PublishOrder>(
      OrderActions.OrderActionTypes.PUBLISH_ORDER
    ),
    map(action => action.payload),
    switchMap((payload: PublishOrderRequestBody) =>
      this.orderService.publishOrder(payload).pipe(
        map((res: any) => {
          const toast: ToastConfig = {
            title: 'Opublikowano zamówienie'
          };
          this.toasterService.showSuccessMessage(toast);
          return new PublishOrderSuccess({});
        }),
        catchError((err: HttpErrorResponse) => {
          const toast: ToastConfig = {
            title: 'Błąd z wysłaniem żądania',
            body: `Kod błędu: ${err.status}`
          };
          this.toasterService.showErrorMessage(toast);
          return of(new PublishOrderFailure(err));
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private toasterService: ToastMessageService
  ) {}
}
