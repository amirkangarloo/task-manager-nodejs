'use strict';

const express = require('express');
const app = express();

// Routes
require('@routes')(app);

module.exports = () => {
    const port = process.env.APP_PORT;

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
    })
};