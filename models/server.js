const express = require('express')
const cors = require('cors'); //Implementar seguridad
const bodyParser = require('body-parser') //Paquete para convertir el objeto enviado desde el formulario
const { dbConection } = require('../database/config');



class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.serviciosPath = '/Servicios' //Ruta de la API
        this.membresiasPath = '/Membresias' //Ruta de la API
        this.usuariosPath = '/Usuarios'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.serviciosPath, require('../routes/Servicios')),
        this.app.use(this.membresiasPath, require('../routes/Membresias')),
        this.app.use(this.usuariosPath, require('../routes/Usuarios'))

       
    }
    
    middlewares(){
        this.app.use( cors() ); //Indicar el uso de cors
        this.app.use(bodyParser.json())//Parsear objetos a insertar en la base de datos
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase