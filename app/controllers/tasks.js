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
                error: "NOT FOUND",
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
        const {id: taskId} = req.params;
        const updateTask = await taskModels.updateTask(
            collection,
            taskId,
            req.body
        );
        
        if (updateTask.matchedCount == 0) {
            return res.status(404).send({
                error: "NOT FOUND",
                message: `No task with id: ${taskId}`
            })
        }
        
        if (updateTask.modifiedCount == 0 ||
            !req.body.name ||
            !req.body.completed
            ) {
            return res.status(500).send({
                error: "FAILED REQUEST",
                message: `Items can't be changed`
            })
        }

        res.status(200).send({updateTask});

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