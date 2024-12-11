export abstract class Animal {
    // Abstract method (does not have implementation)
    abstract makeSound(): void;

    // Concrete method (does have implementation)
    move(): void {
        console.log("Moving...");
    }
}