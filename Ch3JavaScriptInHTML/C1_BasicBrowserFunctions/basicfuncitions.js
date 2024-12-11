function startAdventure() {
    // Alert to greet the player
    alert('Welcome, brave adventurer!');

    // Prompt to get the player's name
    const playerName = prompt('What is your name, traveler?');

    if (playerName) {
        // Use the player's input in a confirm dialog
        const confirmAdventure = confirm(
            `Nice to meet you, ${playerName}! Are you ready to start your journey?`
        );

        if (confirmAdventure) {
            alert(`Great, ${playerName}! Your journey begins now. 🗺️`);
            // Add more steps or paths in the adventure here
        } else {
            alert('Maybe next time, adventurer. Safe travels! 🌟');
        }
    } else {
        alert('You must have a name to proceed. Refresh to try again.');
    }
}