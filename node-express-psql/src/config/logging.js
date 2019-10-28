const winston = require('winston');

const config = require('./config');

const logger = winston.createLogger({
  level: config.logger.logging_level,
  format: winston.format.json(),
  defaultMeta: {service: 'user-service'},
  transports: [
    new winston.transports.File({filename: 'error.log', level: 'error'}),
    new winston.transports.File({filename: 'combined.log'}),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (config.env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
