document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("back");
    button.addEventListener("click", () => {
        window.location.href = "login.html"; // Navigate back to Page 1
    });
});