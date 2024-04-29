// Cargar modulos de node
let express = require('express')
let bodyParser = require('body-parser')

// Ejecutar express
let app = express()
// Cargar ficheros rutas

// Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// CORS

// Añadir prefijo a rutas

// Ruta o metodo de prueba
app.get('/',(req,res) =>{})

// Exportarfichero