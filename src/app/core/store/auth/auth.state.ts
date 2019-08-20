import { User } from 'src/app/shared/interface/user.interface';

export interface AuthState {
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  token: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null
};
