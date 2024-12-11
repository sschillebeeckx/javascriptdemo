// login.ts
import { Person } from './person';
import { PersonNotFoundError } from './person-not-found-error';

export class Login {
    private users: Person[];

    constructor(users: Person[]) {
        this.users = users;
    }

    findUser(username: string, password: string): Person | null {
        return this.users.find(user => user.username === username && user.password === password) || null;
    }

    handleLogin(username: string, password: string): Person | null {
        const user = this.findUser(username, password);
        if (!user) {
            throw new PersonNotFoundError("Invalid username or password");
        }
        return user;
    }
}
