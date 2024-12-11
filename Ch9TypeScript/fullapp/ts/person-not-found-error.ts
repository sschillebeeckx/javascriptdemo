export class PersonNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PersonNotFoundError";
        Object.setPrototypeOf(this, PersonNotFoundError.prototype);
    }
}
