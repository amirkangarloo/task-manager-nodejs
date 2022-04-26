'use strict';

const tasks = require('./tasks');

module.exports = (app) => {
    app.use('/api/v1/tasks', tasks);
}