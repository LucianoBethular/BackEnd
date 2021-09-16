const {options} = require("./options/SQlite3");
const knex = require("knex")(options);

const mensajes = [{name:"yop",
                    mensaje:"hola"}];

(async()=>{
    try{
    await knex.schema.dropTableIfExists("mensajes").createTable("mensajes",(table) => {
        table.increments("id").primary();
        table.string("name", 35);
        table.string("mensaje", 100);
        
    })
await knex("mensajes").insert(mensajes).then( _ => console.log("mensajes agregados"))
} catch (err){
    console.log(err)
}finally{
    knex.destroy();
}
})()
/* knex.schema.createTable("items2", table => {

    table.increments("id").primary();
    table.string("name", 35);
    table.string("categoria", 35);
    table.integer("stock")
})
.then (
    ()=>console.log("tabla creada"),
    (err) => console.log(err), 
    ()=>knex.destroy()
) */

/* const items2 = [
    {
        name: "Fideos" ,
        categoria:"Harina" ,
        stock:20
    },
    {
        name: "Leche" ,
        categoria:"Lacteos" ,
        stock:30
    },
    {
        name: "Crema" ,
        categoria:"Lacteos" ,
        stock:15
    }
]

knex("items2").insert(items2).then( _ => console.log("Listo")) */