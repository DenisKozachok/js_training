import { User } from './interfaces';

export class UserSummary {
    private id: number;
    private fullName: string;
    private email: string;

    public constructor(user: User) {
        this.id = user.id;
        this.fullName = `${user.first_name} ${user.last_name}`;
        this.email = user.email;
    }
}
