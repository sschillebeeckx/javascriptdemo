import {Person} from "./person.js";

async function handleSubmitWithAPI(){
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    // Create a Person object from the form data
    const person = new Person(formData.get('username'), formData.get('language'),
        formData.get('gender'));

    // Display person info
    person.displayInfo();

    const personJSON = JSON.stringify(person);

    await fetch('http://localhost:8080/persons', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: personJSON
    })
        .then(response => response.json())
        .then(data => {
            // Store the response (could be an ID or success message)
            console.log(data.username);
            console.log(data.personId);
            sessionStorage.setItem('personId', data.personId);
            console.log(sessionStorage.getItem("personId"));
            window.location.href = 'confirm.html';  // Redirect to confirm page
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

document.getElementById('submitBtn').addEventListener('click', handleSubmitWithAPI);