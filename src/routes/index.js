const {render} = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()
const client = require('../libs/connectdb')()

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/product01.ejs', (req, res) =>{
    res.render('product01')
})

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