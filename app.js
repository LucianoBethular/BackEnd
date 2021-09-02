const handlebars = require("express-handlebars")
const express = require("express");
const app = express();
const http = require("http").Server(app)
const io = require('socket.io')(http)


const PORT = 8080;



const server = http.listen(PORT, () => {
console.log(`servidor escuchando en puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));




io.sockets.on('connection', (socket)=> {
    console.log("cliente conectado: " + socket.id)
    io.sockets.emit('message ', "Hola usuario!!")
})



app.use("/", require("./rutas/productos.route"));
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
app.use(express.urlencoded())




