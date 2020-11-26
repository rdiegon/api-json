 
const express = require('express');
const app = express.Router();
const productoController = require('./productoController');

//TRAE TODOS LOS PRODUCTOS -> GET
app.get("/productos", productoController.getAllProducts );
//TRAE UN SOLO PRODUCTO -> GET -> ID Por paramentro.
app.get("/productos/:id", productoController.getOneProduct);
//CREAR UN NUEVO PRODUCTOS
app.post("/productos/nuevo", productoController.createProduct)
//MODIFICAR PRODUCTO
app.put("/productos/modificar/:id", productoController.updateProduct);
//ELIMINAR PRODUCTO
app.delete("/productos/eliminar/:id", productoController.deleteProduct);
module.exports = app;