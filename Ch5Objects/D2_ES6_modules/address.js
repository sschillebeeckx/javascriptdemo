export class Address {
    constructor(street, city, country, postalCode) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;
    }

    // Method to return the full address as a string
    getFullAddress() {
        return `${this.street}, ${this.city}, ${this.country}, ${this.postalCode}`;
    }

    // Method to check if the address is in the same country as another address
    isSameCountry(otherAddress) {
        return this.country === otherAddress.country;
    }
}