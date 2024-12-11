console.log("while");
let value=1;
while (value <= 10) {
    console.log(value);
    ++value;
}

console.log("do-while");
let value2 = 10;
do {
    console.log(value2);
} while (value2 < 10) ;

console.log("for");
for (let counter = 1; counter <= 10 ; ++counter) {
    console.log(counter);
}

console.log("looping array");
let languages = ["en","fr","nl"];
for (let language of languages) {
    console.log(language);
}

console.log("looping array 'old style'");
for (let index in languages) {
     console.log(languages[index]);
}

console.log("looping object values via keys");
let person = {"name":"John","age":42};
for (let key in person) {
    console.log(person[key]);
}

console.log("break");
for (let counter = 1; counter <= 10 ; ++counter) {
    console.log(counter);
    if (counter===4)break;
}

console.log("continue");
for (let counter = 1; counter <= 10 ; ++counter) {
    if (counter%2===0)continue;
    console.log(counter);
}






