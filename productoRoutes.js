 
const express = require('express');
const app = express.Router();
const productoController = require('./productoController');


app.get("/productos", productoController.getAllProducts );
app.get("/productos/:id", productoController.getOneProduct);
module.exports = app;