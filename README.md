# Task Manager
Task manager with Nodejs, Express and MongoDB.

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


|  **Database Name **| **Collection Name**  |
| :------------: | :------------: |
|  task_manager |  tasks |


## License
[MIT](https://choosealicense.com/licenses/mit/)
