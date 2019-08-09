import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { User } from 'src/app/shared/interface/user.interface';

export interface RegisterResponse {
    token: Token;
    user: User;
}