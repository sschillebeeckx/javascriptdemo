// welcome.ts
import { Person } from './person';

export class Welcome {
    private user: Person;

    constructor(user: Person) {
        this.user = user;
    }

    displayUserInfo(): void {
        const userNameElement = document.getElementById('user-name') as HTMLSpanElement | null;
        const nameElement = document.getElementById('name') as HTMLSpanElement | null;
        const emailElement = document.getElementById('email') as HTMLSpanElement | null;
        const roleElement = document.getElementById('role') as HTMLSpanElement | null;

        if (userNameElement) userNameElement.textContent = this.user.name;
        if (nameElement) nameElement.textContent = this.user.name;
        if (emailElement) emailElement.textContent = this.user.email;
        if (roleElement) roleElement.textContent = this.user.role;
    }
}
