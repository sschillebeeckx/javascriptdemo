export class Person {
    constructor(name, age, address, hobbies, contact) {
        this.name = name;
        this.age = age;
        this.address = address; // Instance of Address
        this.hobbies = hobbies; // Array of hobbies
        this.contact = contact; // Instance of Contact
    }

    // Method to introduce the person
    introduce() {
        return `Hello, I am ${this.name} and I am ${this.age} years old.`; // In English
    }

    // Method to add a new hobby
    addHobby(hobby) {
        this.hobbies.push(hobby);
        console.log(`${hobby} has been added to your hobbies.`); // In English
    }

    // Method to remove a hobby by name
    removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby);
        if (index !== -1) {
            this.hobbies.splice(index, 1);
            console.log(`${hobby} has been removed from your hobbies.`); // In English
        } else {
            console.log(`${hobby} not found in your hobbies.`); // In English
        }
    }

    // Method to display all hobbies
    displayHobbies() {
        return `My hobbies are: ${this.hobbies.join(", ")}`;
    }

    // Method to check if the person is an adult
    isAdult() {
        return this.age >= 18;
    }
}