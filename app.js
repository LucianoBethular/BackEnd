const handlebars = require("express-handlebars")
const express = require("express");


//import multer from "multer";
const router = require("./rutas/productos.route");
const app = express();
//const router = express.Router();
const PORT = 8080;

const productos = [];


app.use(express.json());
const server = app.listen(PORT, () => {
console.log(`servidor escuchando en puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
app.use("/api", require("./rutas/productos.route"));
app.use(express.json());



app.engine("hbs", handlebars({

    extname:".hbs",
    defaultLayout:"index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",


}
))

app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static('public'))
app.get("/api/productos/vistas", (req,res )=>{
    res.render("main", {productos:[{id:3 ,name:"hola", precio:"20"}]})
})