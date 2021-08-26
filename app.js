
import express from 'express';
import multer from 'multer';


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
app.use(express.static('public'))





