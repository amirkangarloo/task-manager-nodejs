'use strict';

const errorHandlers = (err, req, res, next) => {
    return res.status(500).send({
        error: err.name,
        message: err.message
    });
};


module.exports = errorHandlers;