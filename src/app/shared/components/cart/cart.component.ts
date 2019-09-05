import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../interface/cart-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-shared',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  @Input()
  cartItems$:Observable<CartItem[]>;

  @Output()
  deleteClicked: EventEmitter<any> = new EventEmitter();


  @Output()
  saveBtnClicked: EventEmitter<any> = new EventEmitter();

  @Input()
  listName:string;

  @Output()
  listNameChange: EventEmitter<string> = new EventEmitter();

  @Input()
  totalCost:number;

  @Output()
  increaseQuantityBtnClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  decreaseQuantityBtnClicked:EventEmitter<any> = new EventEmitter();

  @Output()
  orderBtnClicked:EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = [
    'picture',
    'name',
    'quantity',
    'delete',
    'price'
  ];

  constructor() { }

  ngOnInit() {
  }

  change(newValue) {
    console.log(newValue)
    this.listName = newValue;
    this.listNameChange.emit(newValue);
  }
}
