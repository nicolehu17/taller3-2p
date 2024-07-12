var express = require('express');
var router = express.Router();
const { cliente, pedido, producto, prodxpedido } = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tienda Express' });
});

router.get('/clientes/json', function(req, res, next) {
  cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(clientes => {
    res.json(clientes);
  })
  .catch(error => res.status(400).send(error));
});

router.get('/pedidos/json', function(req, res, next) {
  pedido.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(pedidos => {
    res.json(pedidos);
  })
  .catch(error => res.status(400).send(error));
});


router.get('/clientes', function(req, res, next) {
  cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(clientes => {
    res.render('clientes', { title: 'Clientes', arrClientes: clientes });
  })
  .catch(error => res.status(400).send(error));
});

router.get('/productos', function(req, res, next) {
  producto.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
  .then(productos => {
    res.render('productos', { title: 'Productos', arrProductos: productos });
  })
  .catch(error => res.status(400).send(error));
});

router.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await pedido.findAll({
      include: [
        {
          model: cliente,
          attributes: ['id', 'nombre', 'apellido']
        },
        {
          model: prodxpedido,
          attributes: ['id', 'cantidad', 'precio'],
          include: [
            {
              model: producto,
              as: 'producto',
              attributes: ['id', 'descripcion']
            }
          ]
        }
      ]
    });
    res.render('pedidos', { title: 'Pedidos', arrPedidos: pedidos });
  } catch (error) {
    console.error('Error fetching pedidos:', error);
    res.status(500).send('Error fetching pedidos');
  }
});

module.exports = router;
