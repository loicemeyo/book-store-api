const BookRouter = require('./books');
const UsersRouter = require('./users');

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, BookRouter);
  app.use(apiPrefix, UsersRouter);
  return app;
};

module.exports = routes;
