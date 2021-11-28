const {render} = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/product01.ejs', (req, res) =>{
    res.render('product01')
})

//post para traer de carrito de compras que se conecte a la colleción



module.exports = router;