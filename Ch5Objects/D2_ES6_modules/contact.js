export class Contact {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
    }

    // Method to update contact details
    updateContact(newEmail, newPhone) {
        this.email = newEmail;
        this.phone = newPhone;
        console.log("Contact information updated.");
    }

    // Method to display contact details
    displayContact() {
        return `Email: ${this.email}, Phone: ${this.phone}`;
    }
}