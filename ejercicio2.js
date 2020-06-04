const express = require('express');
const app = express();
app.get('/:numero',function(req,res){
    let numero = req.params.numero
    let Aleatorio= Math.floor(Math.random()*numero+1)
    res.send(`<h1>${Aleatorio}</h1>`)
})
app.listen(3000)