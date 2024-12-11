class Address{

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

let a = new Address("Diestsevest","32","3000","Leuven");
console.log(a);
console.log(a.getInfo());
console.log(JSON.stringify(a));
let a2 = new Address("Kerkstraat","25","1000","Brussel");
console.log(a2);