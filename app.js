const handlebars = require("express-handlebars")
const express = require("express");


//import multer from "multer";
const router = require("./rutas/productos.route");
const app = express();
//const router = express.Router();
const PORT = 8080;

const productos = [];

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
app.use(express.json());
const server = app.listen(PORT, () => {
console.log(`servidor escuchando en puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
app.use("/api", require("./rutas/productos.route"));
app.use(express.json());



app.engine("hbs", handlebars({

    extname:".hbs",
    defaultLayout:"main.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",


}
))

app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static(__dirname + 'public'))


app.get("/api/productos/vistas", (req,res )=>{
    res.render("main", {productos:[{id:3 ,name:"hola", precio:"20"}]})
})

app.get("/", (req,res )=>{
    res.render("index", {titulo: "Pagina principal"})
})

app.get("/api", (req,res )=>{
    res.render("index", {})
})

app.get("/api/productos/guardar",  (req, res) => {
    res.render("index",{titulo: "complete para guardar item"} )

}); 


app.post("/api/productos/guardar", (req, res) => {
    let name = req.body.producto;
    let price = req.body.precio;
    let thumbnail = req.body.foto;
    const producto = {
    name: name,
    price: price,
    thumbnail: thumbnail,
    };
    productos.push({ ...producto, id: productos.length });
    res.json(producto);
});


