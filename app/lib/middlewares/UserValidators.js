const db = require('../../../database/models');
const reqResponses = require('../helpers/Responses');

let message;

class AuthValidator {
  static async validateSignup(req, res, next) {
    try {
      const {
        firstname, lastname, email, password,
      } = req.body;

      let re;

      if (!firstname || !email || !password) {
        message = 'The firstname, email and password fields are required!';
        return reqResponses.handleError(message, 400, res);
      }
      if (firstname === '' || lastname === '' || email === '' || password === '') {
        message = 'Kindly fill all fields in order to sign up';
        reqResponses.handleError(message, 400, res);
      }
      if (firstname) {
        re = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
        message = 'Firstname should have at least 3 letters';
        if (!re.test(firstname)) reqResponses.handleError(message, 400, res);
      }
      if (email) {
        re = /(^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-z]+$)/;
        message = 'Email should have the format user@mail.com';
        if (!re.test(email)) reqResponses.handleError(message, 400, res);
      }
      if (password) {
        re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{7,}$/;
        message = 'Password should contain capital and small letters, numbers and special characters e.g. @,#,!';
        if (!re.test(password)) reqResponses.handleError(message, 400, res);
      }

      const emailExists = await db.User.findOne({
        where: { email },
      });
      if (emailExists) {
        message = `Sorry, a user with the email ${email} already exists`;
        reqResponses.handleError(message, 400, res);
      }
      next();
    } catch (error) {
      reqResponses.handleError(error.toString(), 500, res);
    }
  }
}

module.exports = AuthValidator;
