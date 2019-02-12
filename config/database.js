const config = require('./config')

const defaultConfig = {
  database: config.databaseName,
  username: config.dbUsername,
  password: config.dbPassword,
  host: config.host,
  dialect: config.databaseDialect,
}

const database = {
  development: {
    ...defaultConfig,
  },
  test: {
    ...defaultConfig, database: 'books_db_test',
  },
  production: {
    ...defaultConfig,
  },
}

module.exports = database
