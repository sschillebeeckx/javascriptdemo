const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
    },
    hobbies: ["reading", "hiking", "coding"],
    contact: {
        email: "johndoe@example.com",
        phone: "555-1234"
    }
};

person.job="Developer";
person.age = 42;
delete person.contact;

console.log(person);

console.log(person.valueOf());

console.log(Object.keys(person));

