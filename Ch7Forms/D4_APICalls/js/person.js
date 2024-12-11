export class Person {
    constructor(username, language, gender,personId) {
        this.username = username;
        this.language = language;
        this.gender = gender;
        this.personId = personId;
    }

    // Method to display person info
    displayInfo() {
        console.log(`Username: ${this.personId}`);
        console.log(`Username: ${this.username}`);
        console.log(`Language: ${this.language}`);
        console.log(`Gender: ${this.gender}`);
    }
}