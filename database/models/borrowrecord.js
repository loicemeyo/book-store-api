module.exports = (sequelize, DataTypes) => {
  const BorrowRecord = sequelize.define('BorrowRecord', {
    borrowDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expectedReturnDate: {
      type: DataTypes.DATE,
      field: 'expected_return_date',
      allowNull: false,
    },
    actualReturnDate: {
      type: DataTypes.DATE,
      field: 'borrow_date',
      allowNull: true,
    },
  })
  BorrowRecord.associate = (models) => {
    models.BorrowRecord.belongsTo(models.User, { as: 'User' })
    models.BorrowRecord.belongsTo(models.Book, { as: 'Book' })
  };
  return BorrowRecord
}
