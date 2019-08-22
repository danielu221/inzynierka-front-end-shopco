import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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


  constructor() { }

  ngOnInit() {
  }


}
