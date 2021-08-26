import express from 'express';

const app = express();
const router = express.Router();
const productos = []

app.use(express.json());

router.get('/api/productos/listar', (req, res)=>{
    if (productos.length == 0 )
    res.send("error no hay productos cargados")
    else
    res.json({items: productos, cantidad:productos.length})
        
});


router.get('/api/productos/listar/:id', (req, res)=>{
if(!isNaN(req.params.id))
{
    let id = parseInt(req.params.id, 10);
    if (id > 0 && id <= productos.length)
    res.json(productos[req.params.id-1]); 
    else 
    res.send("producto no existe")
}
else 
res.send("esto no es un numero ")
});

router.put('/api/productos/actualizar/:id', (req, res)=>{
    if(!isNaN(req.params.id))
    {
        let id = parseInt(req.params.id, 10);
        if (id > 0 && id <= productos.length)
        res.json(productos[req.params.id-1]); 
        else 
        res.send("producto no existe")
    }
    else 
    res.send("esto no es un numero ")
    });

    router.delete('/api/productos/borrar/:id', (req, res)=>{
        if(!isNaN(req.params.id))
        {
            let id = parseInt(req.params.id, 10);
            if (id > 0 && id <= productos.length)
            res.json(productos[req.params.id-1]); 
            else 
            res.send("producto no existe")
        }
        else 
        res.send("esto no es un numero ")
        });

router.post('/api/productos/guardar', (req, res,)=>{
    let name = req.body.producto;
    let price = req.body.precio;
    let thumbnail= req.body.foto;

    const producto = {
        name : name,
        price : price,
        thumbnail : thumbnail
    }

    productos.push({...producto, id:productos.length })
    res.json(producto)
})

module.exports = router; 
