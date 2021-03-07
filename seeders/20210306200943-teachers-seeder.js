'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      full_name: 'Juliana Fulana de Tal',
      email: 'juliana@juliana.com',
      speciality: 'Polidance',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Anderson Ciclano de Tal',
      email: 'anderson@anderson.com',
      speciality: 'Spinning',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Roberto Monstro',
      email: 'monstro@monstro.com',
      speciality: 'Musculação',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Lúcia Magrela',
      email: 'magrela@magrela.com',
      speciality: 'Dança',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};