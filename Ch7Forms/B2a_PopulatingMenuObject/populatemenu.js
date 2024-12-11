let countryData = {be:"Belgium",nl:"The Netherlands",fr: "France"};

const selectMenu = document.getElementById('country');

// Loop through the object and create option elements
for (const [value, text] of Object.entries(countryData)) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;

    // Append the option to the select menu
    selectMenu.appendChild(option);
}