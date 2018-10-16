module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('borrow_records', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    bookId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'book_id',
      references: {
        model: 'books',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    borrowDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'borrow_date',
    },
    expectedReturnDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'expected_return_date',
    },
    actualReturnDate: {
      type: Sequelize.DATE,
      field: 'actuall_return_date',
      allowNull: true,
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
  down: queryInterface => queryInterface.dropTable('borrow_records'),
};
