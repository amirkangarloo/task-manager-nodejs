'use strict';

exports.getAllTasks = async (req, res) => {
    res.send('get all tasks');
};

exports.createNewTask = async (req, res) => {
    res.send('create task');
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