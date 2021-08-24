import express from 'express';

const app = express();
const router = express.Router();

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
    

    productos.push({...req.body, id:productos.length })
    res.json(req.body)
})

module.exports = router; 