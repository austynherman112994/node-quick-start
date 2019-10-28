const taskService = require('../services/taskService');

var router = require('express').Router();


router.get('/tasks/active',
  /**
   * Express path retrieving active Tasks in the database.
   * @param {Object} req - The express request object.
   * @param {Object} res - The express response object.
   * @param {callback} next - Callback for propegating any errors up to the express error handler.
   * @return {Array.<json>} A list of active Tasks.
   */
  async function (req, res, next) {
    try{
      let task = await taskService.getActiveTasks();
      res.send(task);
    }
    catch(error){
      next(error)
    }
  }
);

router.post('/tasks/create',
  /**
   * Express path for creating a new Task in the database.
   * @param {Object} req - The express request object.
   * @param {Object} res - The express response object.
   * @param {callback} next - Callback for propegating any errors up to the express error handler.
   * @return {json} The Task that was created.
   */
  async function (req, res, next) {
    try{
      let taskList;
      let name = req.body.name;
      let description = req.body.description;
      if('projectId' in req.body){
        let projectId = req.body.projectId;
        taskList = await taskService.createTask(name, description, projectId);
      }
      else{
        taskList = await taskService.createTask(name, description);
      }

      res.send(taskList)
    }
    catch(error){
      next(error)
    }
  }
);

module.exports = router;
