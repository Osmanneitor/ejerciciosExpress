const express = require('express')
const app = express();
const string = require('./ejercicio4a');
app.get('/',function(req,res){
    res.send(`${string()}`)
})
app.listen(3001)