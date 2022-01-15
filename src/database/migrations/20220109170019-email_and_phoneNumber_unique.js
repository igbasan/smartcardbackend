'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.changeColumn('hospitals', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
     await queryInterface.changeColumn('hospitals', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
    await queryInterface.changeColumn('patients', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
    await queryInterface.changeColumn('patients', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
