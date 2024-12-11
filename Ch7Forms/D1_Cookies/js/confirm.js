//Retrieves the value of a cookie by its name.
function getCookie(name) {
    const cookieArr = document.cookie.split(';'); // Split cookies into key-value pairs
    for (let cookie of cookieArr) {
        const [key, value] = cookie.trim().split('='); // Split each cookie into key and value
        if (key === name) {
            return value; // Return the value for the matched key
        }
    }
    return null; // Return null if the cookie is not found
}

// Display the stored cookies on the confirmation page
function displayConfirmationData() {
    const username = getCookie('username');
    const language = getCookie('language');
    const gender = getCookie('gender');

    if (username && language && gender) {
        document.getElementById('usernameDisplay').innerText = `Username: ${username}`;
        document.getElementById('languageDisplay').innerText = `Language: ${language}`;
        document.getElementById('genderDisplay').innerText = `Gender: ${gender === 'M' ? 'Male' : 'Female'}`;
    } else {
        document.body.innerHTML = '<p>No form data found. Please go back and fill out the form.</p>';
    }
}

// Call the function when the page loads
window.onload = displayConfirmationData;
