'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const productos = [];
    for (let i = 0; i < 10; i++) {
      productos.push({
        descripcion: 'Producto ' + i,
        precio: parseFloat((Math.random() * 100).toFixed(2)),
        stock: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('productos', productos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
