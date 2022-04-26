'use strict';

const express = require('express');
const router = express.Router();

// Add controller modules
const controller = require('@controllers/tasks');


// Implement task routes
router.get('/', controller.getAllTasks); // Get all tasks
router.post('/', controller.createNewTask); // Create a new task
router.get('/:id', controller.getTask); // Get single task
router.patch('/:id', controller.updateTask); // Update task
router.delete('/:id', controller.deleteTask); // Delete task



module.exports = router;