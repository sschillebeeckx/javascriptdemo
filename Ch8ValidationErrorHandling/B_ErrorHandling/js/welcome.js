document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        // If no user data is found, redirect to login page
        window.location.href = "login.html";
        return;
    }

    // Display the user profile data
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('name').textContent = user.name;
    document.getElementById('email').textContent = user.email;
    document.getElementById('role').textContent = user.role;
});
