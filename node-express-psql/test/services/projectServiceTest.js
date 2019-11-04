const projectService = require('../../src/services/projectService');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.use(require('chai-like'))
chai.use(require('chai-things'))

describe('Get active tasks', function () {
    it("Should return a list of active projects", function (done) {
      projectService.getActiveProjects().then(function (projects) {
          expect(projects).to.include.something.deep.like({
            id: 1,
            name: 'Project 1',
            description: 'Project 1 Desc',
            status: 'ToDo',
          });
          expect(projects).to.include.something.deep.like({
            id: 2,
            name: 'Project 2',
            description: 'Project 2 Desc',
            status: 'ToDo',
          });

          done();
        }).catch(done);
    });
});
