'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('patients', 'password', {
      type: Sequelize.STRING,
     })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('patients', 'password')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
