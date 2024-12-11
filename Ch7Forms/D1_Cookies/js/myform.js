// Utility functions for cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Cookie expiration time
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const username = document.getElementById('username').value;
    const language = document.getElementById('language').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Store data in cookies
    setCookie('username', username, 1); // Store for 1 day
    setCookie('language', language, 1);
    setCookie('gender', gender, 1);

    // Redirect to confirmation page
    window.location.href = 'confirm.html';
}

// Attach event listener
document.getElementById('submitBtn').addEventListener('click', handleFormSubmit);
