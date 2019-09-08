import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss']
})
export class IconBtnComponent implements OnInit {
  @Input()
  icon: string;

  @Input()
  type="button"

  @Input()
  isLoading=false;

  constructor() { }

  ngOnInit() {
  }

}
