export class CountryMenu {
    constructor() {
        this.options = {be:"Belgium",nl:"The Netherlands",fr: "France"};
    }

    populate(selectElement) {
        // Loop through the options and create option elements
        for (const [value, text] of Object.entries(this.options)) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;

            // Append the option to the select menu
            selectElement.appendChild(option);
        }
    }
}