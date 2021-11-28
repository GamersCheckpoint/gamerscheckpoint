const path = require('path')
const express =require('express')
const logger = require('morgan')
const bodyParse = require('body-parser')
const app = express()
const indexRoutes = require('./src/routes/index')


app.set('port', process.env.PORT ||3000)
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParse.urlencoded({extended:false}))
app.use('/css', express.static(path.join(__dirname, 'src/CSS')))
app.use('/js', express.static(path.join(__dirname, 'src/JS')))
app.use('/imagen', express.static(path.join(__dirname, 'src/IMAGEN')))

app.use('/', indexRoutes)

app.listen(app.get('port'),()=>{
    console.log("SERVIDOR EN PUERTO", app.get('port'))
})