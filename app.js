
import express from 'express';


const app = express()

const PORT = 8080;

const productos = []


const server = app.listen(PORT, () =>{
console.log(`servidor escuchando en puerto ${server.address().port}`)}
)
server.on("error",error => console.log(`Error en servidor ${error}`));

app.use(express.json());
app.use(express.static('/public'))
app.get('/api/productos/listar', (req, res)=>{
    if (productos.length == 0 )
    res.send("error no hay productos cargados")
    else
    res.json({items: productos, cantidad:productos.length})
        
});


app.get('/api/productos/listar/:id', (req, res)=>{
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

app.put('/api/productos/actualizar/:id', (req, res)=>{
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

    app.delete('/api/productos/borrar/:id', (req, res)=>{
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

app.post('/api/productos/guardar', (req, res,)=>{
    

    productos.push({...req.body, id:productos.length })
    res.json(req.body)
})
