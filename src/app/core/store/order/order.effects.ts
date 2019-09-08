import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as OrderActions from './order.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  PublishOrderRequestBody,
  PublishOrderSuccess,
  PublishOrderFailure,
  GetMyOrdersSuccess,
  GetMyOrdersFailure
} from './order.action';
import { OrderService } from './order.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ToastConfig } from 'src/app/shared/interface/toast-config.interface';
import { ToasterService } from 'angular2-toaster';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { Order, OrderStatus } from 'src/app/shared/interface/order.interface';
import { MatDialog } from '@angular/material/dialog';

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

  @Effect()
  getMyOrders = this.actions$.pipe(
    ofType<OrderActions.GetMyOrders>(
      OrderActions.OrderActionTypes.GET_MY_ORDERS
    ),
    switchMap(() =>
      this.orderService.getMyOrders().pipe(
        map((res: OrderActions.MyOrderResponseObj[]) => {
          let myOrders: Order[] = [];
          myOrders = res.map(orderRes => {
            return {
              dispositionDeliveryAddress: orderRes.dispositionDeliveryAddress,
              listOfItems: {
                cartItems: orderRes.listOfItems.items.map(orderResItem => {
                  return {
                    cartItemId: orderResItem.id,
                    quantity: orderResItem['product_units'],
                    totalPrice: orderResItem.totalItemPrice,
                    productName: orderResItem.product.productName,
                    unitPrice: orderResItem.product.unitPrice,
                    picture: orderResItem.product.picture,
                    id: orderResItem.product.id
                  };
                }),
                cartName: orderRes.listOfItems.listName,
                totalItemsPrice: orderRes.listOfItems.totalItemsPrice,
                id: orderRes.listOfItems.id
              },
              code: orderRes.code,
              deliveryDateTime: orderRes.deliveryDatetime,
              status: this.mapOrderResStatusToOrderStatus(
                orderRes.dispositionStatus.dispositionStatusName
              ),
              creationDatetime: orderRes.creationDatetime,
              id: orderRes.id,
              principal: orderRes.principal,
              mandatory: orderRes.mandatory
            };
          });
          return new GetMyOrdersSuccess({ myOrders: myOrders });
        }),
        catchError((err: HttpErrorResponse) => {
          const toast: ToastConfig = {
            title: 'Błąd z wysłaniem żądania',
            body: `Kod błędu: ${err.status}`
          };
          this.toasterService.showErrorMessage(toast);
          return of(new GetMyOrdersFailure(err));
        })
      )
    )
  );

  @Effect()
  getOrdersToTake = this.actions$.pipe(
    ofType<OrderActions.GetOrdersToTake>(
      OrderActions.OrderActionTypes.GET_ORDERS_TO_TAKE
    ),
    switchMap(() =>
      this.orderService.getOrdersToTake().pipe(
        map((res: OrderActions.OrderToTakeResponseObj[]) => {
          let ordersToTake: Order[] = [];
          ordersToTake = res.map(orderRes => {
            return {
              dispositionDeliveryAddress: orderRes.dispositionDeliveryAddress,
              listOfItems: {
                cartItems: orderRes.listOfItems.items.map(orderResItem => {
                  return {
                    cartItemId: orderResItem.id,
                    quantity: orderResItem['product_units'],
                    totalPrice: orderResItem.totalItemPrice,
                    productName: orderResItem.product.productName,
                    unitPrice: orderResItem.product.unitPrice,
                    picture: orderResItem.product.picture,
                    id: orderResItem.product.id
                  };
                }),
                cartName: orderRes.listOfItems.listName,
                totalItemsPrice: orderRes.listOfItems.totalItemsPrice,
                id: orderRes.listOfItems.id
              },
              code: orderRes.code,
              deliveryDateTime: orderRes.deliveryDatetime,
              status: this.mapOrderResStatusToOrderStatus(
                orderRes.dispositionStatus.dispositionStatusName
              ),
              creationDatetime: orderRes.creationDatetime,
              id: orderRes.id,
              principal: orderRes.principal,
              mandatory: orderRes.mandatory
            };
          });
          return new OrderActions.GetOrdersToTakeSuccess({
            ordersToTake: ordersToTake
          });
        }),
        catchError((err: HttpErrorResponse) => {
          const toast: ToastConfig = {
            title: 'Błąd z wysłaniem żądania',
            body: `Kod błędu: ${err.status}`
          };
          this.toasterService.showErrorMessage(toast);
          return of(new OrderActions.GetOrdersToTakeFailure(err));
        })
      )
    )
  );

  @Effect()
  getTakennOrders = this.actions$.pipe(
    ofType<OrderActions.GetTakenOrders>(
      OrderActions.OrderActionTypes.GET_TAKEN_ORDERS
    ),
    switchMap(() =>
      this.orderService.getTakenOrders().pipe(
        map((res: OrderActions.OrderToTakeResponseObj[]) => {
          let takenOrders: Order[] = [];
          takenOrders = res.map(orderRes => {
            return {
              dispositionDeliveryAddress: orderRes.dispositionDeliveryAddress,
              listOfItems: {
                cartItems: orderRes.listOfItems.items.map(orderResItem => {
                  return {
                    cartItemId: orderResItem.id,
                    quantity: orderResItem['product_units'],
                    totalPrice: orderResItem.totalItemPrice,
                    productName: orderResItem.product.productName,
                    unitPrice: orderResItem.product.unitPrice,
                    picture: orderResItem.product.picture,
                    id: orderResItem.product.id
                  };
                }),
                cartName: orderRes.listOfItems.listName,
                totalItemsPrice: orderRes.listOfItems.totalItemsPrice,
                id: orderRes.listOfItems.id
              },
              code: orderRes.code,
              deliveryDateTime: orderRes.deliveryDatetime,
              status: this.mapOrderResStatusToOrderStatus(
                orderRes.dispositionStatus.dispositionStatusName
              ),
              creationDatetime: orderRes.creationDatetime,
              id: orderRes.id,
              principal: orderRes.principal,
              mandatory: orderRes.mandatory
            };
          });
          return new OrderActions.GetTakenOrdersSuccess({
            takenOrders: takenOrders
          });
        }),
        catchError((err: HttpErrorResponse) => {
          const toast: ToastConfig = {
            title: 'Błąd z wysłaniem żądania',
            body: `Kod błędu: ${err.status}`
          };
          this.toasterService.showErrorMessage(toast);
          return of(new OrderActions.GetTakenOrdersFailure(err));
        })
      )
    )
  );

  @Effect()
  takeOrder = this.actions$.pipe(
    ofType<OrderActions.TakeOrder>(OrderActions.OrderActionTypes.TAKE_ORDER),
    map(action => action.payload),
    switchMap(payload =>
      this.orderService.takeOrder(payload.orderId).pipe(
        map((res: any) => {
          const toast: ToastConfig = {
            title: 'Podjąłeś się zlecenia'
          };
          this.toasterService.showSuccessMessage(toast);
          return new OrderActions.TakeOrderSuccess({
            orderId: payload.orderId
          });
        }),
        catchError((err: HttpErrorResponse) => {
          const toast: ToastConfig = {
            title: 'Błąd z wysłaniem żądania',
            body: `Kod błędu: ${err.status}`
          };
          this.toasterService.showErrorMessage(toast);
          return of(new OrderActions.GetOrdersToTakeFailure(err));
        })
      )
    )
  );

  mapOrderResStatusToOrderStatus(orderResStatus: string): string {
    switch (orderResStatus) {
      case 'PUBLISHED':
        return OrderStatus.Published;
      default:
        return '';
    }
  }

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private toasterService: ToastMessageService
  ) {}
}
