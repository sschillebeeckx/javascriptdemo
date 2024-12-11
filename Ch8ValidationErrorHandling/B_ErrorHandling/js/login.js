import { Person } from './person.js';
import { PersonNotFoundError } from './person-not-found-error.js';

// Hardcoded list of users
const users = [
    new Person('john_doe', 'password123', 'John Doe', 'john@example.com', 'admin'),
    new Person('jane_smith', 'password456', 'Jane Smith', 'jane@example.com', 'user'),
    new Person('bob_jones', 'password789', 'Bob Jones', 'bob@example.com', 'user')
];

// Function to find user
function login(username, password, users) {
    const userData = users.find(user => user.username === username && user.password === password);

    if (!userData) {
        throw new PersonNotFoundError("Invalid username or password");
    }

    // Return the user object
    return userData;
}

// Listen for login button click
document.getElementById("login-button").addEventListener("click", handleLogin);

// Handle login logic
function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Clear any previous error messages
    const errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.style.display = 'none'; // Hide the error message initially

    try {
        // Validate login credentials
        const user = login(username, password, users);
        console.log('Login successful:', user);
        localStorage.setItem('user', JSON.stringify(user));
        // Redirect to the welcome page after successful login
        window.location.href = "welcome.html";
    } catch (error) {
        if (error instanceof PersonNotFoundError) {
            // Display error message on the page
            const errorMessageDiv = document.getElementById("error-message");
            errorMessageDiv.textContent = error.message;
            errorMessageDiv.style.display = 'block'; // Show the error message
        } else {
            console.error("An unexpected error occurred:", error);
            alert("Failed to login. Please try again.");
        }
    }
}


