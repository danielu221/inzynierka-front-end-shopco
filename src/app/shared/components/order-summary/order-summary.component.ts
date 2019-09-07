import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../interface/cart-item.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Input()
  totalCost: number;

  @Input()
  title = 'Podsumowanie zamówienia';

  @Input()
  cartItems: CartItem[];
  constructor() {}

  ngOnInit() {}
}
