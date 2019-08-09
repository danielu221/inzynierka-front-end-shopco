import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss']
})
export class SubmitBtnComponent implements OnInit {

  @Input()
  isLoading = false

  constructor() { }

  ngOnInit() {
  }

}
