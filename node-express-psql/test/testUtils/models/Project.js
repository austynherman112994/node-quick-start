var SequelizeMock = require('sequelize-mock');

var dbMock = new SequelizeMock();

// TODO Pull mock projects from testUtils data
module.exports = (sequelize, DataTypes) => {
  let projectMock = dbMock.define('Project');
  projectMock.$queueResult([
    projectMock.build({
        id: 1,
        name: 'Project 1',
        description: 'Project 1 Desc',
        status: 'ToDo'
    }),
    projectMock.build({
        id: 2,
        name: 'Project 2',
        description: 'Project 2 Desc',
        status: 'ToDo'
    })
  ]);

  return projectMock;
}
