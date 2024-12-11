function testDataTypes():void {

    let age: number = 25;
    let price: number = 19.99;
    //price = "bla";

    let name: string = "John";
    let isActive: boolean = true;
    let hasPermission: boolean = false;


    let numbers: number[] = [1, 2, 3, 4];
    let names: string[] = ["John", "Jane", "Doe"];

    let point: [number, number] = [10, 20];
    let personTuple: [string, number, boolean] = ["Alice", 30, true];

    let person: object = { name: "Alice", age: 30 };

    let something: any = 42;
    something = "Hello";

    logMessage(name);
   // logMessage(age);    //does not compile, since age is not a string
}

function logMessage(message: string): void {
    console.log(message);
}

testDataTypes();


