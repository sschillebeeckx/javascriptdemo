// bubbling.js

// Click event handler
function handleClick() {
    document.getElementById("message").textContent = "You clicked the button!";
}

// Keyup event handler
function handleKeyup(event) {
    document.getElementById("message").textContent = `You typed: ${event.target.value}`;
}

// Blur event handler
function handleBlur() {
    document.getElementById("message").textContent = "Input field lost focus!";
}

// Mouseover event handler
function handleMouseover() {
    document.getElementById("message").textContent = "You hovered over the text!";
}
