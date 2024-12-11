// person.ts
export class Person {
    username: string;
    password: string;
    name: string;
    email: string;
    role: string;

    constructor(username: string, password: string, name: string, email: string, role: string) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    static fromStorage(data: string | null): Person | null {
        if (!data) return null;
        const parsed = JSON.parse(data);
        return new Person(parsed.username, parsed.password, parsed.name, parsed.email, parsed.role);
    }
}

