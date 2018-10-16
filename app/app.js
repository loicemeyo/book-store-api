const express = require('express')
const bodyParser = require('body-parser')
const db = require('../database/models')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/api/users', (req, res) => db.User.create({
  firstName: req.body.first_name,
  lastName: req.body.last_name,
  email: req.body.email,
})
  .then(user => res.status(201).send(user))
  .catch(err => res.status(400).send(err)))

app.get('/api/users/:id', (req, res) => db.User.find({
  where: { id: req.params.id },
  include: [
    {
      model: db.Book,
      attributes: ['title'],
      as: 'AuthoredBooks',
      through: { attributes: [] },
    },
  ],
})
  .then(user => res.status(200).send(user))
  .catch(err => res.status(400).send(err)))

app.get('/api/book/:id', (req, res) => db.Book.findById(req.params.id)
  .then(book => res.status(200).send(book))
  .catch(err => res.status(400).send(err)))

app.post('/api/books', (req, res) => db.Book.create({
  title: req.body.title,
})
  .then((book) => {
    book.setAuthors([1])
    res.status(201).send(book)
  })
  .catch(err => res.status(400).send(err)))


module.exports = app;
