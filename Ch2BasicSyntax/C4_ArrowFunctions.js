let addExpression =(x,y)=>x+y;
console.log(addExpression(3,6));

let subtractExpression = (x,y)=>x-y;
console.log(subtractExpression(3,6));

function doSomething(myFunction){
    console.log(myFunction(3,6));
}
doSomething(subtractExpression);
doSomething((x,y)=>x/y);

let func1 = x => console.log(x);
func1("hello");

let func2 = () => console.log("hello");
func2();

let func3 = (x,y) => {console.log("The result is :"); return x*y;};
console.log(func3(3,6));