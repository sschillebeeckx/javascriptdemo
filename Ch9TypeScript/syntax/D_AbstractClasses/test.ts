import {Dog} from "./dog";

function test(): void {
    const myDog = new Dog();
    myDog.makeSound();
    myDog.move();
}

test();