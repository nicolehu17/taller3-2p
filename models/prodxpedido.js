'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class prodxpedido extends Model {
    static associate(models) {
      prodxpedido.belongsTo(models.pedido, { foreignKey: 'id_pedido' });
      prodxpedido.belongsTo(models.producto, { foreignKey: 'id_producto' });
    }
  }
  prodxpedido.init({
    id_producto: DataTypes.INTEGER,
    id_pedido: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'prodxpedido',
    tableName: 'prodxpedidos',
  });
  return prodxpedido;
};
