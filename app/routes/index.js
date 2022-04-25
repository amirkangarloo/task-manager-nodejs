'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers');

// test roter
const test = router.get('/', controller.test);

module.exports = (app) => {
    app.use('/', test);
}