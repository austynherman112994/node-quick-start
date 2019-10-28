const Sequelize = require('sequelize');
const {Project} = require('../models');
const {Task} = require('../models');
const Op = Sequelize.Op;

/**
 * Fetches Projects from the Database that do not have the 'Deleted' status.
 * @return {Array.<json>} A list of the active projects in the database.
 */
async function getActiveProjects() {
  try {
    var projectList = await Project.findAll({
      where: {
        status: {
          [Op.ne]: 'Deleted',
        },
      },
      attributes: ['id', 'name', 'description'],
      include: [{
        model: Task,
        as: 'tasks'
      }],
    });
    return projectList;
  }
  catch(error){
    throw error;
  }
};

/**
 * Creates a Project in the database.
 * @param {string} name - The name of the project.
 * @param {string} description - The description of the project.
 * @return {json} The Project that was created.
 */
async function createProject(name, description) {
  try {
    var project = await Project.create(
      {
         name: name,
         description: description
      },
      {}
    );
    return project;
  }
  catch(error){
    throw error;
  }
};

exports.getActiveProjects = getActiveProjects;
exports.createProject = createProject;
