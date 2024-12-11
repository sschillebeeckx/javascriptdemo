let x = 5; let y=5; let z=30;

if ( x === y && z <= 8) {
    console.log("true");
} else {
    console.log("false");
}

if ( x === y && z <= 8)  console.log("true");
else console.log("false");

if ( x === y && z <= 8) {
    console.log("true");
} else if (z>20){
    console.log("other thing");
} else {
    console.log("false");
}