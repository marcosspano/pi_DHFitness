'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      full_name: 'Juliana Fulana de Tal',
      email: 'juliana@juliana.com',
      speciality: 'Polidance',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Anderson Ciclano de Tal',
      email: 'anderson@anderson.com',
      speciality: 'Spinning',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Roberto Monstro',
      email: 'monstro@monstro.com',
      speciality: 'Musculação',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Lúcia Magrela',
      email: 'magrela@magrela.com',
      speciality: 'Dança',
      active: true,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: 'Andressa Vanessa',
      email: 'andressa@andressa.com',
      speciality: 'Dança',
      active: false,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};