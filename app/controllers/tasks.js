'use strict';

const taskModels = require('@models/tasks');
const collection = process.env.MONGODB_COLLECTION_NAME;

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModels.getAllTasks(collection);
        res.status(200).send({tasks});
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        });
    }
};

exports.createNewTask = async (req, res) => {
    try {
        const task = req.body;
        const newTask = await taskModels.insertTask(collection, task);
        res.status(201).send({newTask});
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        });
    }
};

exports.getTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const task = await taskModels.getTaskById(collection, taskId);
        if (task.length < 1) {
            return res.status(404).send({
                message: `No task with id: ${taskId}`
            })
        }

        res.status(200).send({task});
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const result = await taskModels.deleteTask(collection, taskId);

        res.status(200).send({result})

    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        });
    }
};