'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const pedidos = [];
    for (let i = 0; i < 10; i++) {
      pedidos.push({
        fecha: new Date(),
        id_cliente: Math.floor(Math.random() * 10) + 1, // assuming cliente ids are between 1 and 10
        estado: ['Pendiente', 'Enviado', 'Entregado'][Math.floor(Math.random() * 3)],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('pedidos', pedidos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
