let myArray = ["one", "two", "three","four"];

for (let elem of myArray){
    console.log(elem);
}

myArray.push("five");
myArray.shift();
console.log(myArray.length);
console.log(myArray);

myArray=myArray.concat(["six","seven"]);
console.log(myArray);

console.log(myArray.slice(1,3));

console.log(myArray.join(", "));

myArray=myArray.reverse();
console.log(myArray);

console.log(myArray.sort());

console.log(myArray.sort((a, b) => b.localeCompare(a)));

