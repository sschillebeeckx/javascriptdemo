// Function to handle form submission using FormData
function handleFormSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Create a FormData object from the form
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    // Convert FormData to an object
    const formObject = Object.fromEntries(formData.entries());

    // Store the form data in sessionStorage as JSON
    sessionStorage.setItem('formData', JSON.stringify(formObject));

    // Redirect to the confirmation page
    window.location.href = 'confirm.html';
}

// Attach the event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', handleFormSubmit);
