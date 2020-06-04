let estudiantes = ['Osman','Oscar','Robert','Alejo','Macarena','Irati','AndreDuty','AndreaGomez','Jhon','Maria','Ibai','kike','jimena','ander','Viktor','Yone','Julian','Aitor',]
const express= require('express')
const app = express();
app.get('/profesores/:nombre/:nombre2',function(req,res){
    let profesor = req.params.nombre
    let profesor2 = req.params.nombre2
    estudiantes.push(profesor,profesor2);
    res.send(estudiantes)
})

app.listen(3003);
