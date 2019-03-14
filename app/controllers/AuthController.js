const HTTPstatus = require('http-status');
const db = require('../../database/models');
const responses = require('../../lib/helpers/Responses');
const encPassword = require('../../lib/helpers/Encrypt');
const { createToken } = require('../../lib/helpers/jwtHelper');
const { secretKey, jwtExpiration } = require('../../config/config')

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
      const message = [HTTPstatus.CREATED, 'User created successfully', true];
      responses.handleSuccess(res, message, signedUp);
    } catch (error) {
      responses.handleError(error.toString(), HTTPstatus.INTERNAL_SERVER_ERROR, res);
    }
  }

  static login(req, res, next) {
    const token = createToken(
      { id: req.user.id },
      secretKey,
      { expiresIn: jwtExpiration },
    );
    res.status(HTTPstatus.OK).json({
      message: 'success',
      token,
    });
    next();
  }

  static testPrivateRoute(req, res, next) {
    res.status(HTTPstatus.OK).send('wow, you accessed a private route');
    next();
  }
}

module.exports = AuthController;
