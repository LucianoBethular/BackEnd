
import express from 'express';
import handlebars from 'express-handlebars'

const app = express();
const router = express.Router();
const PORT = 8080;

const productos = []


const server = app.listen(PORT, () =>{
console.log(`servidor escuchando en puerto ${server.address().port}`)}
)
server.on("error",error => console.log(`Error en servidor ${error}`));


app.use('/api', import('./rutas/productos.route.js'));
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
    res.render("main", {productos:[]})
})