export class PersonNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "PersonNotFoundError";
    }
}