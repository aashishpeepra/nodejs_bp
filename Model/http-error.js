class HttpError extends Error{
    constructor(message,errorCode){
        super(message);
        console.error(message,errorCode)
        this.code = errorCode;
    }
}

module.exports = HttpError;