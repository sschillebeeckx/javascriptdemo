// Function to display the form data
function displayConfirmationData() {
    // Retrieve data from localStorage
    const username = sessionStorage.getItem('username');
    const language = sessionStorage.getItem('language');
    const gender = sessionStorage.getItem('gender');

    // Display the data in the page
    document.getElementById('usernameDisplay').innerText = `Username: ${username}`;
    document.getElementById('languageDisplay').innerText = `Language: ${language}`;
    document.getElementById('genderDisplay').innerText = `Gender: ${gender === 'M' ? 'Male' : 'Female'}`;
}

// Call the function when the page loads
window.onload = displayConfirmationData;
