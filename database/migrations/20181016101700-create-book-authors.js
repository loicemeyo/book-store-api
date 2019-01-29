module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('book_authors', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    bookId: {
      allownull: false,
      type: Sequelize.INTEGER,
      field: 'book_id',
      references: {
        model: 'books',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    userId: {
      allownull: false,
      type: Sequelize.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('book_authors'),
}
