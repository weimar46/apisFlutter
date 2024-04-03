//Importar paquetes
require('dotenv').config()//Dependencia para vincular las variables de entorno

//Impoortar clases o archivos necesarios
const {Server} = require('./models/server')

const server = new Server()//Creando instancia

server.listen()