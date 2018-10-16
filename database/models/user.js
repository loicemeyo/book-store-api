module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  })
  User.associate = (models) => {
    models.User.belongsToMany(models.Book, { as: 'AuthoredBooks', through: 'BookAuthors', foreignKey: 'userId' })

    models.User.hasMany(models.BorrowRecord, {
      as: 'borrowedBooks',
      foreignKey: 'userId',
    })
  }

  return User
}
