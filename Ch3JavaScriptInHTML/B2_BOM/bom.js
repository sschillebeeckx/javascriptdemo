// Run the script automatically when the page loads
window.onload = function () {
    // 1. Using the `window` object to display an alert and open a new window
    alert("Welcome! Opening Example.com in a new window...");
    window.open("https://example.com", "_blank", "width=600,height=400");

    // 2. Using the `navigator` object to check online status
    const onlineStatus = navigator.onLine ? "You are online!" : "You are offline.";
    document.getElementById("status").textContent = onlineStatus;

    // 3. Using the `location` object to log the current URL
    console.log(`Current URL is: ${location.href}`);

    // 4. Using the `history` object to navigate back after 5 seconds
    setTimeout(() => {
        document.getElementById("message").textContent = "Going back to the previous page in 5 seconds...";
        setTimeout(() => history.back(), 5000); // Goes back in history after 5 seconds
    }, 2000);

    // 5. Using the `screen` object to display screen resolution
    const resolution = `Screen resolution is: ${screen.width}x${screen.height}`;
    document.getElementById("resolution").textContent = resolution;
};