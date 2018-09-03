export class BaseError {
    constructor(error) {
        this.message = error.message;
        this.status_code = error.status_code;
    }
}