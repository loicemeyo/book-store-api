const express = require('express');
const BooksController = require('../controllers/Books');

const Router = express.Router();

Router.get(
  '/books',
  BooksController.getAllBooks,
);

Router.get(
  '/book/:id',
  BooksController.getBookById,
);

Router.post(
  '/book',
  BooksController.addBook,
);

Router.patch(
  '/book/:id',
  BooksController.editBookById,
);

module.exports = Router;
