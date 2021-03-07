'use strict';

const bcrypt = require ('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      full_name: 'Administrador',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('12345', 10),
      level: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Gerente',
      email: 'gerente@gerente.com',
      password: bcrypt.hashSync('12345', 10),
      level: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Supervisor',
      email: 'supervisor@supervisor.com',
      password: bcrypt.hashSync('12345', 10),
      level: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
