'use strict';

const db = require('@database/connection');
const { ObjectId } = require('mongodb');

exports.getAllTasks = async (collection) => {
    
    return await db.collection(collection).find({}).toArray();
};

exports.getTaskById = async (collection, taskId) => {
    
    return await db.collection(collection).find({
        _id: ObjectId(taskId)
    }).limit(1).toArray();
};

exports.insertTask = async (collection, task) => {
    
    return await db.collection(collection).insertOne(task);
};

exports.deleteTask = async (collection, taskId) => {

    return await db.collection(collection).deleteOne({
        _id: ObjectId(taskId)
    });
};

exports.updateTask = async (collection, taskId, changeItem) => {

    return await db.collection(collection).updateOne(
        {
            _id: ObjectId(taskId)
        },
        {
            $set: {
                name: changeItem.name,
                completed: changeItem.completed
            }
        }
    );
};