'use strict';

const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect('mongodb://27017/task_manager');
};

module.exports = db();