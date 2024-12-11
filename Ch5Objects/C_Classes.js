class Address {
    constructor(street, city, country, postalCode) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;
    }

    // Method to return the full address as a string
    getFullAddress() {
        return `${this.street}, ${this.city}, ${this.country}, ${this.postalCode}`;
    }

    // Method to check if the address is in the same country as another address
    isSameCountry(otherAddress) {
        return this.country === otherAddress.country;
    }
}

class Contact {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
    }

    // Method to update contact details
    updateContact(newEmail, newPhone) {
        this.email = newEmail;
        this.phone = newPhone;
        console.log("Contact information updated.");
    }

    // Method to display contact details
    displayContact() {
        return `Email: ${this.email}, Phone: ${this.phone}`;
    }
}

class Person {
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

// Create instances
const address = new Address("Kerkstraat 45", "Antwerpen", "Belgium", "2000");
const contact = new Contact("janedoe@example.be", "+3221234567");

const person = new Person("Jane Doe", 28, address, ["reading", "hiking", "coding"], contact);

// Testing the methods
console.log(person.introduce());
console.log(person.displayHobbies());
person.addHobby("painting");
person.removeHobby("hiking");
console.log(person.displayHobbies());
console.log(person.isAdult() ? "I am an adult." : "I am not an adult."); // In English

console.log(person.address.getFullAddress());
const newAddress = new Address("Diestsevest 32", "Leuven", "Belgium", "3000");
console.log(address.isSameCountry(newAddress) ? "The addresses are in the same country." : "The addresses are in different countries.");

console.log(contact.displayContact());
contact.updateContact("jane.doe@newmail.be", "+3216765432");
console.log(contact.displayContact());
