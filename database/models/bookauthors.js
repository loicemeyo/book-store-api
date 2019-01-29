module.exports = (sequelize, DataTypes) => {
  const BookAuthors = sequelize.define('BookAuthors', {
    bookId: {
      allownull: false,
      type: DataTypes.INTEGER,
      field: 'book_id',
      references: {
        model: 'books',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    userId: {
      allownull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    tableName: 'book_authors',
  })
  return BookAuthors;
}
