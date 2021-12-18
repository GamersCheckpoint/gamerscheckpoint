const {render} = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()
const client = require('../libs/connectdb')()
const mongoose = require('mongoose')

var usuarioSchema = {
    nombre:String,
    apellido:String,
    dni: String,
    correo: String,
    producto: String,
    direccion: String

};

var consultaSchema = {
    nombre:String,
    apellido:String,
    dni: String,
    correo: String,
    producto: String,
    direccion: String

};

const usuarioModelo = mongoose.model("usuarioModelo", usuarioSchema);
const consultaModelo = mongoose.model("consultaModelo", consultaSchema);
mongoose.connect("mongodb+srv://jean-rafael:pancakesdeavena.666@clustercertus.6mvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true })

/*Llamar a las paginas */
router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/product01', (req, res) =>{
    res.render('product01')
})

router.get('/product02', (req, res) =>{
    res.render('product02')
})

router.get('/product03', (req, res) =>{
    res.render('product03')
})

router.get('/product04', (req, res) =>{
    res.render('product04')
})

router.get('/product05', (req, res) =>{
    res.render('product05')
})

router.get('/product06', (req, res) =>{
    res.render('product06')
})

router.get('/product07', (req, res) =>{
    res.render('product07')
})

router.get('/product08', (req, res) =>{
    res.render('product08')
})

router.get('/catalogo', (req, res) =>{
    res.render('catalogo')
})

router.get('/seccion-empresas', (req, res) =>{
    res.rend| er('seccion-empresas')
})

router.get('/conocenos', (req, res) =>{
    res.render('conocenos')
})

router.get('/lg_empresa', (req, res) =>{
    res.render('lg_empresa')
})

router.get('/SAMSUNG_empresa', (req, res) =>{
    res.render('SAMSUNG_empresa')
})

router.get('/registro', (req, res) =>{
    res.render('registro')
})

router.get('extraerDatosUsuario', (req, res) =>{
    res.render('extraerDatosUsuario')
})


/*Agregar info a la BD*/
router.post('/agregarUsuario', (req, res)=>{

    var newUsuario = new usuarioModelo ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        correo: req.body.correo,
        producto: req.body.producto,
        direccion: req.body.direccion
    });

    client.connect(async (err) =>{
        if(!err){
            const collection = client.db("db_gcp").collection("usersPromo")
            collection.insertOne(req.body)
        }else{
            res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")
        }
    })
})
router.post('/agregarConsulta', (req, res)=>{

    var newUConsult = new consultaModelo ({
        nombre: req.body.nombre,
        correo: req.body.correo,
        asunto: req.body.asunto,
        opiniones: req.body.opiniones,
    });

    client.connect(async (err) =>{
        if(!err){
            const collection = client.db("db_gcp").collection("usersPromo")
            collection.insertOne(req.body)
        }else{
            res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")
        }
    })
})


/**Extraer datos de DB */
router.post('/extraerDatosUsuario', (req, res) =>{
    client.connect(async (err) =>{
        if (!err){
            const collection =client.db("db_gcp").collection("usersPromo")
            collection.find().toArray((err, result)=>{
                if(!err){
                    //res.send(result)
                    res.render('registro', {datos:result})
                }else{
                res.send("'resultado':[{'respuesta':'Erros al traer la data'},{'mensaje':" + err +"}]")
                }
            })
        }else{
            res.send("resultado:[{'respuesta':'Error al conectar a la base de datos'},{'mensaje':" + err +"}]")
        }
    })
})

router.post('/extraerDatoDeUnUsuario', (req, res) =>{
    var dniLocal = req.body.dni;
    client.connect(async (err) =>{
        if (!err){
            const collection =client.db("db_gcp").collection("usersPromo")
            collection.find({nombre:{$eq:dniLocal}}).toArray((err, result)=>{
                if(!err){
                    //res.send(result)
                    res.render('registro', {datos:result})
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
