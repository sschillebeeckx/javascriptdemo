function loadPage2(){
    const data = JSON.parse(sessionStorage.getItem("formData"));
    const detailsDiv = document.getElementById("confirmationDetails");

    if (data) {
        detailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Age:</strong> ${data.age}</p>
        `;
    } else {
        detailsDiv.innerHTML = `<p>No data found. Please fill out the form again.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", loadPage2);
