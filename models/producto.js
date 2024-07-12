'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      this.hasMany(models.prodxpedido, { foreignKey: 'id_producto' });
    }
  }
  Producto.init({
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
    tableName: 'productos',
  });
  return Producto;
};
