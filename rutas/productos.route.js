
const express = require("express");

const router = express.Router();






// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


const productos = [];

router.use(express.urlencoded({extended:true}))
router.use(express.json());
router.get("/api", (req,res )=>{
    res.render("index.pug", {productos: productos, titulo: "Pagina principal"})
})



router.get("/", (req,res )=>{
  res.render("index.pug", {productos: productos, titulo: "Pagina principal"})
})

router.get("/api/productos/vistas", (req,res )=>{
  res.render("main", {productos: productos})
})
router.get("/api/productos/listar", (req, res) => {
if (productos.length == 0) res.send("error no hay productos cargados");
else res.json({ items: productos, cantidad: productos.length });
});

router.get("/api/productos/listar/:id", (req, res) => {
if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id, 10);
    if (id > 0 && id <= productos.length)
      res.json(productos[req.params.id - 1]);
    else res.send("producto no existe");
  } else res.send("esto no es un numero ");
});

router.put("/api/productos/actualizar/:id", (req, res) => {
  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id, 10);
    if (id > 0 && id <= productos.length)
      res.json(productos[req.params.id - 1]+"ha sido actualizado");
    else res.send("producto no existe");
  } else res.send("esto no es un numero ");
});



router.delete("/api/productos/borrar/:id", (req, res) => {
  
  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id, 10);
    if (id > 0 && id <= productos.length)
      res.json(productos[req.params.id - 1]+"ha sido borrado");
    else res.send("producto no existe");
  } else res.send("esto no es un numero ");
});


router.get("/api/productos/guardar",  (req, res) => {
  res.render("index.pug",{productos: productos, titulo:"Complete los campos para agregar objeto"} )

}); 

router.post("/api/productos/guardar-datos", (req, res) => {
//    let name = req.body.producto;
//    let price = req.body.precio;
//    let thumbnail = req.body.foto;
//    const producto = {
//    name: name,
//    price: price,
//    thumbnail: thumbnail,
//    };
  productos.push({ ...req.body,  id: productos.length });
res.render("index.pug", {productos: productos, titulo:"Complete los campos para agregar objeto"})
// console.log(productos)
  //res.json(productos)

});




module.exports = router;
