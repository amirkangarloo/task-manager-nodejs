'use strict';

class CustomAPIError extends Error {
    constructor(message, error, statusCode) {
        super(message);
        this.name = error;
        this.statusCode = statusCode;
    }
};


module.exports = CustomAPIError;