const config = require('../config/config');

function createTask(nodeEnv=config.env){
  let taskModel;
  // if the node env is test use the mock Task
  if(nodeEnv === 'test'){
    taskModel = require('../../test/testUtils/models/Task');
  }
  else{
    taskModel = require('../models/Task');
  }
  return taskModel
}

module.exports = createTask();
