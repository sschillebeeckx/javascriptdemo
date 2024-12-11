// app.ts
import { Login } from './login';
import { Person } from './person';
import { Welcome } from './welcome';
import {PersonNotFoundError} from "./person-not-found-error";

export class App {
    private login: Login;

    constructor() {
        // Create hardcoded users
        const users: Person[] = [
            new Person('john_doe', 'password123', 'John Doe', 'john@example.com', 'admin'),
            new Person('jane_smith', 'password456', 'Jane Smith', 'jane@example.com', 'user'),
            new Person('bob_jones', 'password789', 'Bob Jones', 'bob@example.com', 'user')
        ];

        this.login = new Login(users);
    }

    startLogin(): void {
        const loginButton = document.getElementById("login-button") as HTMLButtonElement;
        loginButton?.addEventListener("click", () => this.handleLogin());
    }

    handleLogin(): void {
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        const errorMessageDiv = document.getElementById("error-message") as HTMLDivElement;
        errorMessageDiv.style.display = 'none'; // Hide error message initially

        try {
            const user = this.login.handleLogin(username, password);
            console.log('Login successful:', user);
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "welcome.html"; // Redirect to the welcome page
        } catch (error) {
            if (error instanceof PersonNotFoundError) {
                errorMessageDiv.textContent = error.message;
                errorMessageDiv.style.display = 'block';
            } else {
                console.error("An unexpected error occurred:", error);
                alert("Failed to login. Please try again.");
            }
        }
    }

    startWelcome(): void {
        const user = Person.fromStorage(localStorage.getItem('user'));
        if (!user) {
            window.location.href = "login.html";
            return;
        }

        const welcomePage = new Welcome(user);
        welcomePage.displayUserInfo();
    }
}
let app: App = new App();
