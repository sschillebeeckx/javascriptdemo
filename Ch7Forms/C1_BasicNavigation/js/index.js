document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("goToPage2");
    button.addEventListener("click", () => {
        window.location.href = "page2.html"; // Navigate to Page 2
    });
});
