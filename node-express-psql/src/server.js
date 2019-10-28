require('babel-core/register');
require('babel-polyfill');

const config = require('./config/config');
const app = require('./config/express');
const sequelize = require('./config/sequelize');
const logger = require('./config/logging');


logger.info("Starting the app...")
sequelize.sync()
.then(() => {
      app.listen(
        config.port,
        () => console.log(`Example NodeJS, PSQL, and Express API running on port ${config.port}`)
      );
    }
);
