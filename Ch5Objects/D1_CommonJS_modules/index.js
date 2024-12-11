const Person = require('./person.js');
const Address = require('./address.js');
const Contact = require('./contact.js');
const math = require('./math.js');

console.log(math.add(3,5));
console.log(math.divide(3,5));

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