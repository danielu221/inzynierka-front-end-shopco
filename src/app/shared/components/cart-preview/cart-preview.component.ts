import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../interface/cart-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-preview-shared',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponentShared implements OnInit {
  @Input()
  totalCost:number;

  @Input()
  cartItems:CartItem[];

  displayedColumns: string[] = [
    'picture',
    'name',
    'quantity',
    'price'
  ];
  constructor() { }

  ngOnInit() {
  }

}
