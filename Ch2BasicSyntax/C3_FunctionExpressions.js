let addExpression = function(x,y){
    return x+y;
}
console.log(addExpression(3,6));

let subtractExpression = function subtract(x,y){return x-y};
console.log(subtractExpression(3,6));

function doSomething(myFunction){
    console.log(myFunction(3,6));
}
doSomething(subtractExpression);
doSomething(function (x,y){return x/y});