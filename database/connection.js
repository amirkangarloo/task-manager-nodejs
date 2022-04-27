'use strict';

const {MongoClient} = require('mongodb');


const client = new MongoClient(`${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE_NAME}`);

const main = async () => {
    await client.connect((error, result) => {
            if (error) {
                throw error;
            }
            console.log('MongoDB connection successfully...');
        });
};
main();

module.exports = client.db();