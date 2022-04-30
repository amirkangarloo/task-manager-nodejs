'use strict';

const CustomAPIError = require('./custom-error');

module.exports = (taskId) => {
    return new CustomAPIError(
        `No task with id: ${taskId}`,
        "NOT FOUND",
        404
    )
};