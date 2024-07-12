'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    static associate(models) {
      pedido.belongsTo(models.cliente, { foreignKey: 'id_cliente' });
      pedido.hasMany(models.prodxpedido, { foreignKey: 'id_pedido' });
    }
  }
  pedido.init({
    id_cliente: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pedido',
    tableName: 'pedidos',
  });
  return pedido;
};
