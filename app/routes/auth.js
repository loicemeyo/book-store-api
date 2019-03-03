const express = require('express');
const AuthController = require('../controllers/AuthController');
const Validations = require('../../lib/middlewares/UserValidators');

const Router = express.Router();

Router.post(
  '/signup',
  Validations.validateSignup,
  AuthController.signUp,
);

module.exports = Router;
