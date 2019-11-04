/** This segment of code was pulled from the sequelize RTD
* Source: https://sequelize.readthedocs.io/en/1.7.0/articles/express/
*
* The code is responsible for collecting all the models into an object
* that is exported. This simplifies the Sequelize setup and imports.
*/

'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
var db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
);

fs
    .readdirSync(__dirname)
    .filter((file) =>
      file !== 'index.js'
    )
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Project.hasMany(db.Task, {as: 'tasks'});
db.Task.belongsTo(db.Project, {as: 'project'});

module.exports = db;
