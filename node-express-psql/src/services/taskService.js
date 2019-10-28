const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {Project} = require('../models');
const {Task} = require('../models');

/**
 * Creates a Task in the database.
 * @param {string} name - The name of the task.
 * @param {string} description - The description of the task.
 * @param {string} projectId - The project the task belongs to.
 * @return {json} The Task that was created.
 */
async function createTask(name, description, projectId=null) {
  try {
    let task = await Task.create(
      {
         name: name,
         description: description,
      },
      {}
    );
    if(projectId){
      await task.setProject(projectId);
    }
    return task;
  }
  catch(error){
    throw error;
  }
};

/**
 * Fetches Tasks from the Database that do not have the 'Deleted' status.
 * @return {Array.<json>} A list of the active tasks in the database.
 */
async function getActiveTasks() {
  try {
    let taskList = await Task.findAll({
      where: {
        status: {
          [Op.ne]: 'Deleted',
        },
      },
      attributes: ['id', 'name', 'description'],
      include: [{
        model: Project,
        as: 'project'
      }],
    });
    return taskList;
  }
  catch(error){
    throw error;
  }
};


exports.createTask = createTask;
exports.getActiveTasks = getActiveTasks;
