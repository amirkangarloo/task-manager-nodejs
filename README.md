# Task Manager With NodeJs
Task manager with Nodejs, Express and MongoDB.


## Installation


**First step**
```javascript
git clone https://github.com/amirkangarloo/task-manager-nodejs.git
```

**Second step**

Create a [Mongo database](https://github.com/amirkangarloo/task-manager-nodejs#database).

**Third step**

Create a [**.env** file](https://github.com/amirkangarloo/task-manager-nodejs#env-file).


**Fourth step**
```javascript
npm install
```
**Fifth step**
```javascript
npm start
```


## REST API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  GET |  api/v1/tasks |  Get all tasks |
|  POST |  api/v1/tasks |  Create task |
| GET  |  api/v1/tasks/:id |  Get task |
|  PATCH |  api/v1/tasks/:id |  Update task |
|  DELETE |  api/v1/tasks/:id |  Delete task |

## database
This project uses the [MongoDB](https://www.mongodb.com/ "MongoDB") database, and for connection to MongoDB used the [mongodb](https://www.npmjs.com/package/mongodb/ "mongodb") package.


|  **Database Name**| **Collection Name**  |
| :------------: | :------------: |
|  task_manager |  tasks |


## .env file
Create a **.env** file like the below structure.

    #app
    APP_PORT=3000
    APP_NAME=task-manager
    APP_ENV=local

    #DataBase MongoDB
    MONGODB_URL=mongodb://localhost:27017
    MONGODB_DATABASE_NAME=task_manager
    MONGODB_COLLECTION_NAME=tasks
    


## License
[MIT](https://choosealicense.com/licenses/mit/)
