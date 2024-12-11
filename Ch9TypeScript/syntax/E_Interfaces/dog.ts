import {Animal} from "./animal";

export class Dog implements Animal {
    // Providing implementation for the abstract method
    makeSound(): void {
        console.log("Woof!");
    }

    move(): void {
        console.log("Moving...");
    }
}