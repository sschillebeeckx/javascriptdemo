// Function to handle form submission
function handleFormSubmit() {
    // Get form values
    const username = document.getElementById('username').value;
    const language = document.getElementById('language').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Store data in localStorage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('language', language);
    sessionStorage.setItem('gender', gender);

    // Redirect to confirm.html
    window.location.href = 'confirm.html';
}

// Attach event listener to the button
document.getElementById('submitBtn').addEventListener('click', handleFormSubmit);
