const express = require('express')
const app = express();
app.get('/',function(req,res){
res.send('<h1>Hola Mundo</h1><h6>desde express</h6>')
})
app.listen(3000)