const projectService = require('../services/projectService');

var router = require('express').Router();


router.get('/projects/active',
  /**
   * Express path retrieving active Projects in the database.
   * @param {Object} req - The express request object.
   * @param {Object} res - The express response object.
   * @param {callback} next - Callback for propagating any errors up to the express error handler.
   * @return {Array.<json>} A list of active Tasks.
   */
  async function (req, res, next) {
    try{
      var projectList = await projectService.getActiveProjects()
      res.send(projectList)
    }
    catch(error){
      next(error)
    }
  }
);

router.post('/projects/create',
  /**
   * Express path for creating a new Project in the database.
   * @param {Object} req - The express request object.
   * @param {Object} res - The express response object.
   * @param {callback} next - Callback for propegating any errors up to the express error handler.
   * @return {json} The Project that was created.
   */
  async function (req, res, next) {
    try{
      var name = req.body.name;
      var description = req.body.description;
      var projectList = await projectService.createProject(name, description);
      res.send(projectList);
    }
    catch(error){
      next(error)
    }
  }
);

module.exports = router;
