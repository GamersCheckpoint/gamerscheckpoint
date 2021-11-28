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

router.get('/lg_empresa.ejs', (req, res) =>{
    res.render('lg_empresa')
})

router.get('/SAMSUNG_empresa.ejs', (req, res) =>{
    res.render('SAMSUNG_empresa')
})

router.get('/LOGIN.ejs', (req, res) =>{
    res.render('LOGIN')
})

/*Agregar info a la BD*/
router.post('/agregarusuario', (req, res)=>{
    client.connect(async (err) =>{
        if(!err){
            const collection = client.db("db_gcp").collection("users")
        collection.insertOne(req.body)
        res.send("resultado:[{'respuesta':'OK'}]")
        }else{
            res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")
        }
        
    })
})

router.post('/direccionventa', (req, res) =>{
    client.connect(async (err) =>{
        if(!err){
        const collection = client.db("db_gcp").collection("ventadirec")
        collection.insertOne(req.body)
        res.send("resultado:[{'respuesta':'OK'}]")
        }else{
            res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")
        }
    })
})

router.post('/extraerDatosUsuario', (req, res) =>{
    client.connect(async (err) =>{
        if (!err){
            const collection =client.db("db_gcp").collection("users")
            collection.find().toArray((err, result)=>{
                if(!err){
                    res.send(result)
                }else{
                res.send("'resultado':[{'respuesta':'Erros al traer la data'},{'mensaje':" + err +"}]")
                }
            })
        }else{
            res.send("resultado:[{'respuesta':'Error al conectar a la base de datos'},{'mensaje':" + err +"}]")
        }
    })
})

module.exports = router;