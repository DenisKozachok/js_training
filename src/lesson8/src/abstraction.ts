import { User } from './interfaces';

export abstract class BaseUser {
    id: number;
    fullName: string;

    constructor(id: number, fullName: string) {
        this.id = id;
        this.fullName = fullName;
    }

    abstract getDetails(): string;
}

export class DetailedUser extends BaseUser {
    email: string;
    avatar: string;

    constructor(user: User) {
        super(user.id, `${user.first_name} ${user.last_name}`);
        this.email = user.email;
        this.avatar = user.avatar;
    }

    getDetails(): string {
        return `User: ${this.fullName}, Email: ${this.email}, Avatar: ${this.avatar}`;
    }
}