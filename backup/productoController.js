//DATOS DE PROUDCTO
let data = [{ id: 1, nombre: "Heladera", precio: 50000, stock: 20 }];

function getAllProducts(req, res){
    res.status(200).json(data);
}

module.exports = {
    getAllProducts
   
  }



/*
//TRAE UN SOLO PRODUCTO -> GET -> ID Por paramentro.
app.get("/productos/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json("No se encontró producto");
  }
});

//CREAR PRODUCTO -> POST -> POR BODY(id, nombre, precio, stock)
app.post("/productos/nuevo", function (req, res) {
  let itemIds = data.map((item) => item.id);
  let nuevoId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

  let nuevoProducto = {
    id: nuevoId,
    nombre: req.body.nombre,
    precio: req.body.precio,
    stock: req.body.stock,
  };

  data.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
});

//MODIFICAR PRODUCTO -> PUT -> POR BODY(nombre, precio, cantidad) -> POR PARAMETRO(id)
app.put("/productos/modificar/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    let modificarProducto = {
      id: req.body.id,
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock,
    };

    let encontrado = data.indexOf(producto);

    data.splice(encontrado, 1, modificarProducto);

    res.status(200).json("producto modificado");
  } else {
    res.status(404).json("No existe producto");
  }
});

//BORRAR PRODUCTO -> DELETE -> POR PARAMETRO(id)
app.delete("/productos/eliminar/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    let encontrado = data.indexOf(producto);

    data.splice(encontrado, 1);

    res.status(200).json("producto Eliminado");
  } else {
    res.status(404).json("No existe producto");
  }
});

*/

