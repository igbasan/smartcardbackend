'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.addColumn('patients', 'state', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('patients', 'nin', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return Promise.all([
       queryInterface.removeColumn('patients', 'state'),
       queryInterface.removeColumn('patients', 'nin')
      ])
    
  }
};
