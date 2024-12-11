import {Person} from "./person";

function testPerson(){
    let p1: Person = new Person("John",42);
    console.log(p1.greet());
}

testPerson();