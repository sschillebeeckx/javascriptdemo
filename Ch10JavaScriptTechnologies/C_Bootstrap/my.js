document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    const changeTextButton = document.getElementById('changeTextButton');
    const message = document.getElementById('message');

    // Use vanilla JavaScript to handle the button click event
    changeTextButton.addEventListener('click', function () {
        message.textContent = 'Text has been changed!';
        message.classList.remove('alert-info');
        message.classList.add('alert-success');
    });
});
