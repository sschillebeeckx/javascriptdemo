let myArray2 = ["one", "two", "three","four"];

console.log(myArray2.some(s => s.startsWith("t")));
console.log(myArray2.every(s => s.startsWith("t")));
let myArray3 = myArray2.filter(s => s.startsWith("t"));
console.log(myArray3);

myArray3.forEach(s => console.log(s));

let found =  myArray2.find(s => s.startsWith("t"));
console.log(found);

myArray2.map(s => s.toUpperCase())
        .forEach(s => console.log(s));
