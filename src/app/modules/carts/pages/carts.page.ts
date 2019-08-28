import { Component, OnInit } from '@angular/core';
import { LoadCarts } from 'src/app/core/store/carts/carts.actions';
import { Store, select } from '@ngrx/store';
import { CartsPageState } from 'src/app/core/store/carts/carts.reducer';
import { STORAGE_USER } from 'src/app/shared/variables/local-storage.variables';
import { Observable } from 'rxjs';
import {selectAllCarts} from '../../../core/store/carts/carts.selectors'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-carts',
  templateUrl: './carts.page.html',
  styleUrls: ['./carts.page.scss']
})
export class CartsPage implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'price'
  ];
carts$:Observable<any>

  dataSource = ELEMENT_DATA;
  constructor(private store: Store<CartsPageState>) {

    this.carts$ = store.pipe(select(selectAllCarts));
  }

  ngOnInit() {
    this.carts$.subscribe(r=>{console.log(r)})
    this.store.dispatch(
      new LoadCarts({ userId: JSON.parse(localStorage.getItem(STORAGE_USER)).id})
    );
  }
}
