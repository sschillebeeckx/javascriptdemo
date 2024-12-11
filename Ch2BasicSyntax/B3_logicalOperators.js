console.log("AND");

let x = 5;let y = 7;let z = 9;

if (x !== y && z > y) {
    console.log("true");
} else {
    console.log("false");
}

let b1 = x !== y && z > y;
console.log("b1=" + b1);

let name1 = "John";
let val1 = name1 && "An";
console.log("name=" + val1);

console.log("OR");

let b2 = x !== y || z > y;
console.log("b2=" + b2);

let name2;
let val2 = name2 || "An";
console.log("name2=" + val2);

console.log("NOT");
let b3= !!null;
console.log("b3=" + b3);

console.log("COMBINATIONS");
let b4 = x !== y || z > y && z<x;
console.log("b4=" + b4);

let b5 = (x !== y || z > y ) && z<x;
console.log("b5=" + b5);

let val3 = "a"&&"b"||"c";
console.log("val3=" + val3);

