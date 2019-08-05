import { User } from '../../../shared/interface/user.interface';
import { Token } from '../../../shared/interface/token.interface';

export interface LoginResponse {
    token: Token;
    user: User;
}
