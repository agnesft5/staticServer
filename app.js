const express = require ('express');


const server = express();

server.use(express.static('public'));


server.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000')
})