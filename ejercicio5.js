let datos = {
    nombre: '',
    apellido: '' ,
    edad: 20,
}
const express = require('express')
const app= express();
app.get('/datos/:nombre/:apellido/:edad',function(req,res){
let nombre= req.params.nombre;
let apellido= req.params.apellido;
let edad = parseInt(req.params.edad)
datos={
    nombre: nombre,
    apellido:apellido,
    edad : edad,
}
res.send(datos)
})

app.listen(3002)