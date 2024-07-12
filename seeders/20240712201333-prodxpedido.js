'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const prodxpedidos = [];

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (let i = 0; i < 50; i++) {
      prodxpedidos.push({
        id_producto: randomInt(1, 10),  // Asume que tienes 10 productos
        id_pedido: randomInt(1, 20),    // Asume que tienes 20 pedidos
        cantidad: randomInt(1, 100),
        precio: parseFloat((Math.random() * 100).toFixed(2)),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('prodxpedidos', prodxpedidos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prodxpedidos', null, {});
  }
};
