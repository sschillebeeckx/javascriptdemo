function restaurant_check(meal, tax, tip) {
    if(tip === undefined) tip=0;
    tip /= 100;
    let total_amount = meal * (1 + tax/100 + tip);
    return total_amount;
}

/*function restaurant_check(meal, tax) {
    return 42;
}*/

let check = restaurant_check(50,21,2);
console.log(check);
console.log(restaurant_check(50,21));

doSomething();
function doSomething() {
    console.log("doSomething");
}


console.log(doSomething());

function calculateArrayAverage(someArray){
    let total=0;
    for (let value of someArray){total+=value}
    return total/someArray.length;
}

console.log("average is " + calculateArrayAverage([5,6,2,1]));