import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartPreviewComponent } from 'src/app/modules/carts/components/cart-preview/cart-preview.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/root-state';
import { OpenCartDialog } from 'src/app/core/store/carts/carts.actions';

@Component({
  selector: 'app-publish-cart-modal',
  templateUrl: './publish-cart-modal.component.html',
  styleUrls: ['./publish-cart-modal.component.scss']
})
export class PublishCartModalComponent implements OnInit {

  constructor(private dialog:MatDialog,private store:Store<State>) { }

  ngOnInit() {
  }
  onPreviewListClick(){
    this.store.dispatch(new OpenCartDialog({cartId:589}))
  }
}
