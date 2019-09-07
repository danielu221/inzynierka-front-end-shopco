import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input()
  height = '650px';

  @Input()
  imageUrl = 'assets/images/bg_1.jpg'

  constructor() {}

  ngOnInit() {
    console.log(this.height)
  }
}
