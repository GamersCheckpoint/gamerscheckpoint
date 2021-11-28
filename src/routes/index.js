const {render} = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()
const client = require('../libs/connectdb')()

/*Llamar a las paginas */
router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/product01.ejs', (req, res) =>{
    res.render('product01')
})

router.get('/product02.ejs', (req, res) =>{
    res.render('product02')
})

router.get('/product03.ejs', (req, res) =>{
    res.render('product03')
})

router.get('/product04.ejs', (req, res) =>{
    res.render('product04')
})

router.get('/seccion-empresas.ejs', (req, res) =>{
    res.render('seccion-empresas')
})

router.get('/seccion-lavanderia.ejs', (req, res) =>{
    res.render('seccion-lavanderia')
})

/*Agregar info a la BD*/
router.post('/agregarusuario', (req, res)=>{
    client.connect(async (err) =>{
        const collection = client.db("db_gcp").collection("users")
        collection.insertOne(req.body)
    })
})

router.post('/direccionventa', (req, res) =>{
    client.connect(async (err) =>{
        const collection = client.db("db_gcp").collection("ventadirec")
        collection.insertOne(req.body)
    })
})


module.exports = router;