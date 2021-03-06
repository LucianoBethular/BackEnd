import express from 'express';
const express = require('express');
const fs = require('fs');

const app = express()

const PORT = 8080;

const server = app.listen(PORT, () =>{
console.log(`servidor escuchando en puerto ${server.adress().port}`)}
)
server.on("error",error => console.log(`Error en servidor ${error}`));


app.get('/items', (req, res)=>{
    fs.promises.readFile("./productos").then(data=> data.toString('utf-8')).then(datos =>
        {
            const json = JSON.parse(datos)
            res.json({items:[json], cantidad:(json.length) })
        })
})


app.get('/item-random', (req, res)=>{
let random = (min, max) => {return Math.floor(Math.random() * (max-min) + min)}
fs.promises.readFile("./productos").then(data=> data.toString('utf-8')).then(datos =>
    {
        const json = JSON.parse(datos)
        res.json({item: json[random(0,jason.length-1)]})
    })
})


app.get('/visitas', (req, res)=>{
    
})