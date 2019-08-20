import { createSelector } from '@ngrx/store';
import { AuthState } from './auth/auth.state';
import { State } from './root-state';


export const selectAuth = (state: State) => state.auth;

export const selectUser = createSelector(
    selectAuth,
  (state: AuthState) => state.user
);

