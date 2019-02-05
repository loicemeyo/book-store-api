const db = require('../../database/models')
const responses = require('../lib/helpers/Responses')

class BooksController {
  static async getAllBooks(req, res) {
    try {
      const books = await db.Book.findAll();
      const message = [200, 'Books retrieved successfully', true];
      responses.handleSuccess(res, message, books);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }

  static async getBookById(req, res) {
    try {
      const book = await db.Book.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: db.User,
            attributes: ['firstName', 'lastName'],
            as: 'Authors',
            through: { attributes: [] },
          },
        ],
      });
      const message = [200, 'Book retrieved successfully', true];
      responses.handleSuccess(res, message, book);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }

  static async addBook(req, res) {
    try {
      const addedBook = await db.Book.create({
        title: req.body.title,
      })
      const message = [201, 'Book created successfully', true];
      responses.handleSuccess(res, message, addedBook);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }

  static async editBookById(req, res) {
    try {
      const { title } = req.body.title;
      const updatedBook = await db.Book
        .update({ title }, {
          returning: true,
          where: {
            id: req.params.id,
          },
        });
      const message = [200, 'Book edited successfully', true];
      responses.handleSuccess(res, message, updatedBook);
    } catch (error) {
      responses.handleError(error.toString(), 500, res);
    }
  }
}

module.exports = BooksController;
