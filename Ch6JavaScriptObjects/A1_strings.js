let s1 = "JavaScript is fun!";

console.log("length=" + s1.length);

let sub1 = s1.substring(1,5);
console.log("sub1=" + sub1);
let sub2 = s1.substring(3);
console.log("sub2=" + sub2);

let sub3 = s1.substr(2,5);
console.log("sub3=" + sub3);

console.log(s1.startsWith("Ja"));
console.log(s1.startsWith("Sc",5));

console.log(s1.indexOf("a",2));
console.log(s1.indexOf("x"));

let s2="1;John;Doe";
console.log(s2.split(";"));

console.log(s1.charAt(2));

console.log("abc".concat("def","mno","xyz"));

console.log(s1.toUpperCase());
