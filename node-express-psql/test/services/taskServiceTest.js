const taskService = require('../../src/services/taskService');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.use(require('chai-like'))
chai.use(require('chai-things'))

describe('Get active tasks', function () {
    it("Should return a list of active tasks", function (done) {
      taskService.getActiveTasks().then(function (tasks) {
          expect(tasks).to.include.something.deep.like({
            id: 1,
            name: 'Task 1',
            description: 'Task 1 Desc',
            status: 'ToDo',
          });
          expect(tasks).to.include.something.deep.like({
            id: 2,
            name: 'Task 2',
            description: 'Task 2 Desc',
            status: 'ToDo',
          });

          done();
        }).catch(done);
    });
});
