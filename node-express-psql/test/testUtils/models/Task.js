var SequelizeMock = require('sequelize-mock');

var dbMock = new SequelizeMock();

// TODO Pull mock task from testUtils data
module.exports = (sequelize, DataTypes) => {
  let taskMock = dbMock.define('Task');
  taskMock.$queueResult([
    taskMock.build({
        id: 1,
        name: 'Task 1',
        description: 'Task 1 Desc',
        status: 'ToDo'
    }),
    taskMock.build({
        id: 2,
        name: 'Task 2',
        description: 'Task 2 Desc',
        status: 'ToDo'
    })
  ]);
  return taskMock;
}
