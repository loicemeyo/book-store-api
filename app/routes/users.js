const express = require('express');
const UsersController = require('../controllers/UsersController');

const Router = express.Router();

Router.get(
  '/users',
  UsersController.getAllUsers,
);

Router.get(
  '/user/:id',
  UsersController.getUserById,
);

Router.get(
  '/',
  UsersController.welcomeUser,
);

Router.get(
  '*',
  UsersController.wrongUrl,
);

module.exports = Router;
