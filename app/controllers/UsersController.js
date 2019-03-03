const db = require('../../database/models');
const responses = require('../../lib/helpers/Responses');

class UsersController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await db.User.findAll();
      const message = [200, 'Users retrieved successfully', true];
      responses.handleSuccess(res, message, allUsers);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await db.User.find({
        where: { id: req.params.id },
        include: [
          {
            model: db.Book,
            attributes: ['title'],
            as: 'AuthoredBooks',
            through: { attributes: [] },
          },
        ],
      });
      const message = [200, 'User retrieved successfully', true];
      responses.handleSuccess(res, message, user);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }

  static welcomeUser(req, res) {
    return res.status(200).json({
      success: true,
      message: 'Welcome to books api',
    });
  }

  static wrongUrl(req, res) {
    const error = 'Oops, we lost you!.';
    responses.handleError(error, 404, res);
  }
}

module.exports = UsersController;
