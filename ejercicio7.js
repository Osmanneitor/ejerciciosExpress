let ceros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let random = require('./ejercicio7a');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    ceros[random()] += 1;
    res.send(ceros)
})
app.listen(3004)