'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    static associate(models) {
      cliente.hasMany(models.pedido, { foreignKey: 'id_cliente' });
    }
  }
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'clientes',
  });
  return cliente;
};
