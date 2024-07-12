'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Generar 10 clientes aleatorios
    let clientes = [];
    for (let i = 0; i < 10; i++) {
      clientes.push({
        nombre: `Cliente${i + 1}`,
        apellido: `Apellido${i + 1}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Insertar los registros en la base de datos
    await queryInterface.bulkInsert('clientes', clientes, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar todos los registros insertados
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
