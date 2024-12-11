import {Animal} from "./animal";

export class Dog extends Animal {
    // Providing implementation for the abstract method
    makeSound(): void {
        console.log("Woof!");
    }
}