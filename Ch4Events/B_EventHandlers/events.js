document.addEventListener("DOMContentLoaded", () => {
    // Add event listener for Click
    const clickButton = document.getElementById("clickButton");
    clickButton.addEventListener("click", () => {
        document.getElementById("message").textContent = "You clicked the button!";
    });

    // Add event listener for Keyup
    const inputBox = document.getElementById("inputBox");
    inputBox.addEventListener("keyup", (event) => {
        document.getElementById("message").textContent = `You typed: ${event.target.value}`;
    });

    // Add event listener for Blur
    const blurInput = document.getElementById("blurInput");
    blurInput.addEventListener("blur", () => {
        document.getElementById("message").textContent = "Input field lost focus!";
    });

    // Add event listener for Mouseover
    const hoverText = document.getElementById("hoverText");
    hoverText.addEventListener("mouseover", () => {
        document.getElementById("message").textContent = "You hovered over the text!";
    });
});
