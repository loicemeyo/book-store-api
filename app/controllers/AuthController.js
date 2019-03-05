const db = require('../../database/models');
const responses = require('../../lib/helpers/Responses');
const encPassword = require('../../lib/helpers/Encrypt');

class AuthController {
  static async signUp(req, res) {
    try {
      const {
        firstname, lastname, email, password,
      } = req.body;
      const hashedPassword = encPassword.generateHash(password)
      const signedUp = await db.User.create({
        firstName: firstname,
        lastName: lastname,
        email,
        password: hashedPassword,
      })
      const message = [201, 'User created successfully', true];
      responses.handleSuccess(res, message, signedUp);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }

  static login(req, res, next) {
    res.status(200).json(req.user.id);
    next();
  }
}

module.exports = AuthController;
