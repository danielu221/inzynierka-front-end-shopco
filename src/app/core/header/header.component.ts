import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interface/user.interface';
import { Store, select } from '@ngrx/store';
import { State } from '../store/root-state';
import { selectUser } from '../store/root-store.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;

  constructor(private store: Store<State>) {
    this.user$ = store.pipe(select(selectUser));
  }

  ngOnInit() {
  }
}
