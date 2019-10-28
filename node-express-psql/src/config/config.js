module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      host: process.env.HOST,
      dialect: process.env.DB_DIALECT,
      pool: {
        poolMax: process.env.DB_POOL_MAX,
        poolMin: process.env.DB_POOL_MIN,
        poolAcquire: process.env.DB_POOL_ACQUIRE,
        poolIdle: process.env.DB_POOL_IDLE,
        port: process.env.DB_PORT,
      },
    },
  },
  logger: {
    logging_level: process.env.LOGGING_LEVEL || 'error',
  },
};
