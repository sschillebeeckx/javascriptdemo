function validateForm() {
    const form = document.getElementById("myForm");
    const formMessage = document.getElementById("formMessage");
    const nameField = document.getElementById("name");
    const ageField = document.getElementById("age");
    const namePattern = /^[A-Za-z\s]+$/;

    // Clear any previous custom error messages
    formMessage.innerHTML = ''; // Clear all errors

    // Custom Name validation: Only letters and spaces allowed
    if (!namePattern.test(nameField.value) && nameField.value !== "") {
        formMessage.innerHTML = "Invalid name. Only letters and spaces allowed.<br>";
        return false;
    }

    // Validate age input
    if (ageField.value < 1 || ageField.value > 150) {
        formMessage.innerHTML += "Age must be between 1 and 150.<br>";
        return false;
    }

    // Check HTML5 validity for not customized checks
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    return true;
}

// Handle form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting by default

    // Validate form
    if (!validateForm()) {
        return; // Stop submission if form is invalid
    }

    // If valid, collect form data and store it in sessionStorage
    const formData = new FormData(this);
    const formObj = {};
    formData.forEach((value, key) => {
        formObj[key] = value;
    });
    sessionStorage.setItem("formData", JSON.stringify(formObj));

    // Navigate to confirm.html page
    window.location.href = "../html/confirm.html";
});


