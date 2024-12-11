// Function to display form data from sessionStorage
function displayConfirmationData() {
    // Retrieve form data from sessionStorage
    const formDataJSON = sessionStorage.getItem('formData');

    // Parse the JSON string back to an object
    const formData = JSON.parse(formDataJSON);

   // Display the data
    document.getElementById('usernameDisplay').innerText = `Username: ${formData.username}`;
    document.getElementById('languageDisplay').innerText = `Language: ${formData.language}`;
    document.getElementById('genderDisplay').innerText = `Gender: ${formData.gender === 'M' ? 'Male' : 'Female'}`;

}

// Call the function when the page loads
window.onload = displayConfirmationData;

