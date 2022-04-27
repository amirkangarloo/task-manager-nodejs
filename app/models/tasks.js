'use strict';

const db = require('@database/connection');

exports.getAllTasks = async (collection) => {
    
    return await db.collection(collection).find({}).toArray();
};

exports.getTaskById = async (collection, taskId) => {
    
    return await db.collection(collection).findOne({
        _id: taskId
    }).toArray();
};

exports.insertTask = async (collection, task) => {
    
    return await db.collection(collection).insertOne(task);
};