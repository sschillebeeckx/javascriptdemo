// Bubbling Example - Parent and Child click event
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked (bubbling phase)");
});

document.getElementById("child").addEventListener("click", (event) => {
    console.log("Child clicked (bubbling event)");
    // Stop the event from bubbling to the parent
    //event.stopPropagation();
});




