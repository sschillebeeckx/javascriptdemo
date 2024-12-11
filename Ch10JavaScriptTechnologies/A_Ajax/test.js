let xhr = new XMLHttpRequest();
// Set up the request
xhr.open('GET', 'https://api.example.com/data', true);
// Define what to do when the response is received
xhr.onload = function() {
    if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText); // Parse the JSON response
        document.getElementById('result').innerHTML = data.message;
    } else {
        console.log('Error:', xhr.statusText); // Handle errors
    }
};

// Send the request
xhr.send();