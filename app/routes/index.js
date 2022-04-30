'use strict';

const tasks = require('./tasks');
const notFound = require('@middlewares/not-found');

module.exports = (app) => {
    app.use('/api/v1/tasks', tasks);
    
    // middleware
    app.use(notFound);
}