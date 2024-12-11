let s1="hello";
console.log("Writing  " + s1 + ".");

let s2 = 'other text';
console.log(s2);

console.log("Writing" + 3 + 5);
console.log( 3 + 5 + "Writing" );

console.log("Writing" + true);
console.log(5 + true);   // !!!
console.log(true + 5);

let first = "John";
let last = " Doe";
console.log(`User is called ${first}${last}`);


let o = {"key1":"val1","key2":5,"key3":"2024-11-20"};
console.log("o=" + o);
console.log("o=" + JSON.stringify(o));

