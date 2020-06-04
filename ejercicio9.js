let almacen = [
    {
        nombreDepartamento: 'alimentacion',
        productos: {
            lechuga: { nombre: 'lechuga', precio: 1, stock: 10 },
            manzana: { nombre: 'manzana', precio: 2, stock: 20 },
            patata: { nombre: 'patata', precio: 1, stock: 15 },

        }
    },
    {
        nombreDepartamento: 'ferreteria',
        productos: {
            martillo: { nombre: 'martillo', precio: 5, stock: 30 },
            sierra: { nombre: 'sierra', precio: 14, stock: 43 },
            taladro: { nombre: 'taladro', precio: 23, stock: 20 },
        }
    },
    {
        nombreDepartamento: 'ropa',
        productos: {
            pantalones: { nombre: 'pantalones', precio: 9, stock: 100 },
            zapatos: { nombre: 'zapatos', precio: 76, stock: 40 },
            camisas: { nombre: 'camisas', precio: 5, stock: 70 },
        }
    }

];

let cesta;
const express = require('express');
const app = express();
app.get('/productos/:departamento', function (req, res) {
    let departamento = req.params.departamento;
    if (departamento === almacen[0].nombreDepartamento) {
        res.send(`<table><tr><td>${almacen[0].productos.lechuga.nombre}</td><td>${almacen[0].productos.lechuga.precio}</td><td>${almacen[0].productos.lechuga.stock}</td></tr><tr><td>${almacen[0].productos.manzana.nombre}</td><td>${almacen[0].productos.manzana.precio}</td><td>${almacen[0].productos.manzana.stock}</td></tr><tr><td>${almacen[0].productos.patata.nombre}</td><td>${almacen[0].productos.patata.precio}</td><td>${almacen[0].productos.patata.stock}</td></tr></table>`)
    } else if (departamento === almacen[1].nombreDepartamento) {
        res.send(`<table><tr><td>${almacen[1].productos.martillo.nombre}</td><td>${almacen[1].productos.martillo.precio}</td><td>${almacen[1].productos.martillo.stock}</td></tr><tr><td>${almacen[1].productos.sierra.nombre}</td><td>${almacen[1].productos.sierra.precio}</td><td>${almacen[1].productos.sierra.stock}</td></tr><tr><td>${almacen[1].productos.taladro.nombre}</td><td>${almacen[1].productos.taladro.precio}</td><td>${almacen[1].productos.taladro.stock}</td></tr></table>`)
    } else if (departamento === almacen[2].nombreDepartamento) {
        res.send(`<table><tr><td>${almacen[2].productos.pantalones.nombre}</td><td>${almacen[2].productos.pantalones.precio}</td><td>${almacen[2].productos.pantalones.stock}</td></tr><tr><td>${almacen[2].productos.zapatos.nombre}</td><td>${almacen[2].productos.zapatos.precio}</td><td>${almacen[2].productos.zapatos.stock}</td></tr><tr><td>${almacen[2].productos.camisas.nombre}</td><td>${almacen[2].productos.camisas.precio}</td><td>${almacen[2].productos.camisas.stock}</td></tr></table>`)
    }
}
)

app.get('/comprar/:nombre/:cantidad', function (req, res) {
    let nombre = req.params.nombre;
    let cantidad = parseInt(req.params.cantidad);
    for (let i = 0; i < almacen.length; i++) {
        if (cantidad > almacen[i].productos[nombre].stock) {
            res.send(`<h1>No hay stock suficiente</h1>`)
        }
    }


})
app.listen(3009)

