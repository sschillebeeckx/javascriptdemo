// Constructor Function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to the prototype
Car.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
};

// Create an instance
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDetails());