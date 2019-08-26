import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TweenMax } from 'gsap'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  imgSrc:string;
  @Input()
  price:number;
  @Output()
  cartClicked: EventEmitter<any> = new EventEmitter();
  @Output()
  deleteClicked: EventEmitter<any> = new EventEmitter();
  @Input()
  isDisabled = false;


  constructor() { }

  ngOnInit() {
  }

  handleCartClicked(){
    this.cartClicked.emit();
  }

  handleDeleteClicked(){
    this.deleteClicked.emit();
  }

}
