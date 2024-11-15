'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rutas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origen: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      hora_salida: {
        type: Sequelize.TIME
      },
      hora_llegada: {
        type: Sequelize.TIME
      },
      id_vehiculo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rutas');
  }
};