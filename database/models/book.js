module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    borrowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'books',
  })

  Book.associate = (models) => {
    models.Book.belongsToMany(models.User, { as: 'Authors', through: 'BookAuthors', foreignKey: 'bookId' })
    models.Book.hasMany(models.BorrowRecord, { as: 'BorrowHistory', foreignKey: 'bookId' })
  };
  return Book
};
