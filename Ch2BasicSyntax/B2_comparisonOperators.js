console.log("type conversion int/string:");
let x = 5;
let y = "5";

if (x === y) {
    console.log("true");
} else {
    console.log("false");
}

if (x == y) {
    console.log("true");
} else {
    console.log("false");
}

if (x = y) {
    console.log("true");
} else {
    console.log("false");
}

console.log("type conversion to boolean:");
x=5;
if (x) {
    console.log("true");
} else {
    console.log("false");
}

if (x==false) {
    console.log("true");
} else {
    console.log("false");
}

if (x===false) {
    console.log("true");
} else {
    console.log("false");
}

if (x=false) {
    console.log("true");
} else {
    console.log("false");
}
console.log("is 5 true or false?:" +!!5);

console.log("comparing strings:");
let s1="one";
let s2="ONE";
if (s1 === s2) {
    console.log("true");
} else {
    console.log("false");
}
if (s1 == s2) {
    console.log("true");
} else {
    console.log("false");
}
if (s1 = s2) {
    console.log("true");
} else {
    console.log("false");
}

console.log("comparing arrays:");
let a1 = ["one","two","three"];
let a2 = ["one","two","three"];
if (a1 === a2) {
    console.log("true");
} else {
    console.log("false");
}
if (a1.toString() === a2.toString()) {
    console.log("true");
} else {
    console.log("false");
}

