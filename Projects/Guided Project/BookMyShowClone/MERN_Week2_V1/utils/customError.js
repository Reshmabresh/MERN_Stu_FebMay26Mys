//Custom error class  created for error handling
class CustomError extends Error{
    constructor(message,statuscode){
        super(message);
        this.statusCode = this.statusCode;
    }
}

module.exports = CustomError;