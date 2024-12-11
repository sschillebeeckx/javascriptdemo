document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language");
    const maleLabel = document.getElementById("male-label");
    const femaleLabel = document.getElementById("female-label");

    // Object to map language codes to gender labels
    const genderLabels = {
        en: { male: "Male", female: "Female" },
        nl: { male: "Man", female: "Vrouw" },
        fr: { male: "Homme", female: "Femme" },
    };

    // Event listener for language change
    languageSelector.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;

        // Update radio button labels based on selected language
        if (genderLabels[selectedLanguage]) {
            maleLabel.textContent = genderLabels[selectedLanguage].male;
            femaleLabel.textContent = genderLabels[selectedLanguage].female;
        }
    });
});
