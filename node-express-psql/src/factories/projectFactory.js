const config = require('../config/config');

function createProject(nodeEnv=config.env){
  let projectModel;
  // if the node env is test use the mock Projects
  if(nodeEnv === 'test'){
    projectModel = require('../../test/testUtils/models/Project');
  }
  else{
    projectModel = require('../models/Project');
  }
  return projectModel
}

module.exports = createProject();
