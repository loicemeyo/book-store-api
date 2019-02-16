const BookRouter = require('./books');
const UsersRouter = require('./users');
const AuthRouter = require('./auth');

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, BookRouter);
  app.use(apiPrefix, UsersRouter);
  app.use(apiPrefix, AuthRouter);
  return app;
};

module.exports = routes;
