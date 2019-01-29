/*
 * a migration to add a password field to the user table
 * */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      defaultValue: 'password',
    })
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('users', 'password')
  },
}
