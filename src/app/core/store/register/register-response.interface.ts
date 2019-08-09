
import { User } from 'src/app/shared/interface/user.interface';
import { Token } from 'src/app/shared/interface/token.interface';

export interface RegisterResponse {
    token: Token;
    user: User;
}