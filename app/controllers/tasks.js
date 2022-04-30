'use strict';

const taskModels = require('@models/tasks');
const asyncWrapper = require('@middlewares/async');
const collection = process.env.MONGODB_COLLECTION_NAME;

exports.getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await taskModels.getAllTasks(collection);
    res.status(200).send({
        tasks
    });
});

exports.createNewTask = asyncWrapper(async (req, res) => {
    const task = req.body;
    const newTask = await taskModels.insertTask(collection, task);
    res.status(201).send({
        newTask
    });
});

exports.getTask = asyncWrapper(async (req, res) => {
    const {
        id: taskId
    } = req.params;
    const task = await taskModels.getTaskById(collection, taskId);

    if (task.length < 1) {
        return res.status(404).send({
            error: "NOT FOUND",
            message: `No task with id: ${taskId}`
        })
    }

    res.status(200).send({
        task
    });
});

exports.updateTask = asyncWrapper(async (req, res) => {
    const {
        id: taskId
    } = req.params;
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

    // if update task is succsses, GET task for show
    const task = await taskModels.getTaskById(collection, taskId);
    res.status(200).send({
        task
    });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
    const {
        id: taskId
    } = req.params;
    const result = await taskModels.deleteTask(collection, taskId);

    res.status(200).send({
        result
    })
});