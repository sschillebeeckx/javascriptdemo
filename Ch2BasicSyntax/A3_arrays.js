let myArray = ["one", "two", "","four"];
console.log(myArray);
console.log("1=" +myArray[1]);
console.log("2=" +myArray[2]);
console.log("2=" +myArray[4]);

let myArray2 = ["one", "two", "three","four"];
myArray2.push("five");
myArray2.shift();
//myArray2.pop();
console.log(myArray2.length);
console.log(myArray2);
let myArray3 = myArray2.filter(s => s.startsWith("f")).sort((a,b) => a.localeCompare(b));
console.log(myArray3);

let my2DArray = [["one","two"],["five","six","seven"]];
console.log(my2DArray);
console.log(my2DArray[1][1]);