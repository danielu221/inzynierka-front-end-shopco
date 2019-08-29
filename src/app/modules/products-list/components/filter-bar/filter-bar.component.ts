import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constructor } from 'q';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from 'src/app/shared/components/popup-dialog/popup-dialog.component';
import { CartInProductsComponent } from '../cart/cart.component';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Input()
  numberOfProducts = 0;

  @Output()
  listIconClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialog: MatDialog) {}

  ngOnInit() {}

  handleListIconClicked(){
    const dialogRef = this.dialog.open(CartInProductsComponent, {
      width: '800px',
      height:'650px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
