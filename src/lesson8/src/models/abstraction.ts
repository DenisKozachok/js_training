import { User } from './interfaces';

export abstract class BaseUser {
    private id: number;
    protected fullName: string;

    public constructor(id: number, fullName: string) {
        this.id = id;
        this.fullName = fullName;
    }

    public abstract getDetails(): string;
}

export class DetailedUser extends BaseUser {
    private email: string;
    private avatar: string;

    public constructor(user: User) {
        super(user.id, `${user.first_name} ${user.last_name}`);
        this.email = user.email;
        this.avatar = user.avatar;
    }

    public getDetails(): string {
        return `User: ${this.fullName}, Email: ${this.email}, Avatar: ${this.avatar}`;
    }
}
