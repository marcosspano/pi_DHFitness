'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plans', [{
      title: 'Basic 100',
      price: 100,
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Smart 200',
      price: 200,
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Total 300',
      price: 300,
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plans', null, {});
  }
};