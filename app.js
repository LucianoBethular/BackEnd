
const express = require("express");



const app = express();
//const router = express.Router();
const PORT = 8080;



const server = app.listen(PORT, () => {
console.log(`servidor escuchando en puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.use("/", require("./rutas/productos.route"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views")
app.use(express.static(__dirname + 'public'))
app.use(express.urlencoded())




