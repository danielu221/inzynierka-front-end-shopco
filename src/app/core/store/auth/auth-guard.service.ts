import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../root-state';
import { selectUser } from '../root-store.selectors';
@Injectable()
export class AuthGuardService implements CanActivate,OnInit {
  user$: Observable<any>;

  isAuthenticated: boolean;
  constructor(
    public auth: AuthService,
    public router: Router,
    private store: Store<State>
  ) {
    this.user$ = store.pipe(select(selectUser));
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
