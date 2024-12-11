let today = new Date();
console.log(today);

let christmas = new Date(2024,11,25);

let birthDate = new Date("1982-09-22");
console.log(birthDate);

function daysToGo(date,futureDate){
    const diffInMilliseconds = futureDate - date;
    return  Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
}
console.log(daysToGo(today,christmas));



