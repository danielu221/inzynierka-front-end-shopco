
import { User } from 'src/app/shared/interface/user.interface';

export interface RegisterResponse {
    token: string;
    user: User;
}