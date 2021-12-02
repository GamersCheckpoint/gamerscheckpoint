const {render} = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()
const client = require('../libs/connectdb')()
const mongoose = require('mongoose')

var usuarioSchema = {
    nombre:String,
    apellido:String,
    nacimiento: Date,
    correo: String,
    contraseña: String

};

const usuarioModelo = mongoose.model("usuarioModelo", usuarioSchema);

mongoose.connect("mongodb+srv://jean-rafael:pancakesdeavena.666@clustercertus.6mvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true })

/*Llamar a las paginas */
router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/', (req, res) =>{
    res.render('index')

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

router.get('/product05.ejs', (req, res) =>{
    res.render('product05')
})

router.get('/product06.ejs', (req, res) =>{
    res.render('product06')
})

router.get('/product07.ejs', (req, res) =>{
    res.render('product07')
})

router.get('/product08.ejs', (req, res) =>{
    res.render('product06')
})

router.get('/catalogo.ejs', (req, res) =>{
    res.render('catalogo')
})

router.get('/seccion-empresas.ejs', (req, res) =>{
    res.rend| er('seccion-empresas')
})

router.get('/conocenos.ejs', (req, res) =>{
    res.render('conocenos')
})

router.get('/lg_empresa.ejs', (req, res) =>{
    res.render('lg_empresa')
})

router.get('/SAMSUNG_empresa.ejs', (req, res) =>{
    res.render('SAMSUNG_empresa')
})

router.get('/registro.ejs', (req, res) =>{
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
        nacimiento: req.body.nacimiento,
        correo: req.body.correo,
        password: req.body.password
    });

    client.connect(async (err) =>{
        if(!err){
            const collection = client.db("db_gcp").collection("users")
            collection.insertOne(req.body)
            res.render('index')
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
/**Extraer datos de DB */
router.post('/extraerDatosUsuario', (req, res) =>{
    client.connect(async (err) =>{
        if (!err){
            const collection =client.db("db_gcp").collection("users")
            collection.find().toArray((err, result)=>{
                if(!err){
                    //res.send(result)
                    res.render('extraerDatosUsuario', {datos:result})
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
    var nombreLocal = req.body.nombre;
    client.connect(async (err) =>{
        if (!err){
            const collection =client.db("db_gcp").collection("users")
            collection.find({nombre:{$eq:nombreLocal}}).toArray((err, result)=>{
                if(!err){
                    //res.send(result)
                    res.render('extraerDatosUsuario', {datos:result})
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
