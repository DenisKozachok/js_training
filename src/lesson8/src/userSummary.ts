import { User } from './interfaces';

export class UserSummary {
    id: number;
    fullName: string;
    email: string;

    constructor(user: User) {
        this.id = user.id;
        this.fullName = `${user.first_name} ${user.last_name}`;
        this.email = user.email;
    }
}