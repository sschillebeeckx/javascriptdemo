class Address {

    constructor(street,nr,zipcode,city){
        this.street=street;
        this.nr=nr;
        this.city=city;
        this.zipcode=zipcode;
    }

    getInfo(){
        return "Het adres is: " + this.street + " "+ this.nr + " in " + this.city + " "+ this.zipcode;
    }
}

class Course {

    constructor(id,title, nrOfDays,pricePerDay,address) {
        this.id = id;
        this.title = title;
        this.nrOfDays = nrOfDays;
        this.pricePerDay = pricePerDay;
        this.address = address;
    }

    calculateTotalPrice(){
        return this.pricePerDay*this.nrOfDays;
    }

    getInfo(){
        return this.title + " vindt plaats op " + this.address.getInfo();
    }
}

let a = new Address("Diestsevest","32","3000","Leuven");
let c1 = new Course(1, "javascript",3,570,a);
let c2 = new Course(2, "java",5,500,a);


console.log(c1);
console.log(JSON.stringify(c1));

let info1 = c1.getInfo();
console.log(info1);
let prijsC1 = c1.calculateTotalPrice();
console.log(prijsC1);

let prijsC2 = c2.calculateTotalPrice();
console.log(prijsC2);


