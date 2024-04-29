let mongoose = require('mongoose')
let app = require('./app.js')
let port = 3900

mongoose.set('useFindAndModify', false)
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true }).then(()=>{
    console.log('La conexion a BD salio bien')

    // Crear servidor
    app.listen(port,() =>{
        console.log('Servidor corriendo en http://localhost:'+port)
    })
})