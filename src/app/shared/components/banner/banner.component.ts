import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input()
  height = '650px';

  constructor() {}

  ngOnInit() {
    console.log(this.height)
  }
}
