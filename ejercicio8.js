let ceros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let random = require('./ejercicio7a');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    ceros[random()] += 1;
    res.send(ceros)
})
app.get('/borrar/:parametro',function(req,res){
    let numero = req.params.parametro
    for(let i=0; i<ceros.length;i++){
        ceros[numero] = ceros[numero] - ceros[numero] ;
    }res.send(ceros)
})
app.listen(3006)