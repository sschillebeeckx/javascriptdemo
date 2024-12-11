// Retrieve the person ID stored in sessionStorage
const personId = sessionStorage.getItem('personId');

// Fetch the person data using GET request
if (personId) {
    await fetch(`http://localhost:8080/persons/${personId}`)
        .then(response => response.json())
        .then(data => {
            // Display the person data
            document.getElementById('usernameDisplay').innerText = `Username: ${data.username}`;
            document.getElementById('languageDisplay').innerText = `Language: ${data.language}`;
            document.getElementById('genderDisplay').innerText = `Gender: ${data.gender === 'M' ? 'Male' : 'Female'}`;

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
} else {
    document.getElementById('confirmationMessage').innerText = 'No data found.';
}

