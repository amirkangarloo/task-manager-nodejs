'use strict';

const taskModels = require('@models/tasks');
const collection = process.env.MONGODB_COLLECTION_NAME;

exports.getAllTasks = async (req, res) => {
    const tasks = await taskModels.getAllTasks(collection);
    res.status(200).send(tasks);
};

exports.createNewTask = async (req, res) => {
    res.status(201).send('Create new task');
};

exports.getTask = async (req, res) => {
    res.send('get single task');
};

exports.updateTask = async (req, res) => {
    res.send('update task');
};

exports.deleteTask = async (req, res) => {
    res.send('delete task');
};