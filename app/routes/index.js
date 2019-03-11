const HttpStatus = require('http-status');
const BookRouter = require('./books');
const UsersRouter = require('./users');
const AuthRouter = require('./auth');

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, BookRouter);
  app.use(apiPrefix, AuthRouter);
  app.use(apiPrefix, UsersRouter);
  app.use('*', (req, res) => res.status(HttpStatus.NOT_FOUND).json({ message: 'we do not do that here' }))
  return app;
};

module.exports = routes;
