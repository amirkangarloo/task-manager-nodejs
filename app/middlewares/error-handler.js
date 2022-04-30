'use strict';

const errorHandlers = (err, req, res, next) => {
    
    if (!err.statusCode) {
        err.statusCode = 500
    }

    return res.status(err.statusCode).send({
        error: err.name,
        message: err.message
    });
};


module.exports = errorHandlers;