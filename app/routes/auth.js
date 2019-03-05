const express = require('express');
const AuthController = require('../controllers/AuthController');
const Validations = require('../../lib/middlewares/UserValidators');
const { localAuthentication } = require('../../config/passportSetup');

const Router = express.Router();

Router.post(
  '/signup',
  Validations.validateSignup,
  AuthController.signUp,
);

Router.post(
  '/login',
  localAuthentication,
  AuthController.login,
)

module.exports = Router;
