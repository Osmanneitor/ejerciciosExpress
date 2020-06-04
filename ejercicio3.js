let persona=['carlos','luis','juan','pepe','gilberto']


const express = require('express');
const app = express();
app.get('/persona',function(req,res){
    let nombres = ''
    for(let i= 0; i<persona.length;i++){
        nombres +=  `<p>${persona[i]}</p>`;
    }
    res.send(nombres);
})
app.get('/persona/:nombre',function(req,res){
    let nombre= req.params.nombre
    for(let j=0;j<persona.length;j++){
        if(nombre === persona[j]){
            res.send(nombre)
        }
    }
})
app.listen(3006)
