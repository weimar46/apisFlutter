const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getMembresia, postMembresia, putMembresia, deleteMembresia } = require('../controllers/Membresias')

route.get('/', getMembresia)

route.post('/', postMembresia)

route.put('/', putMembresia)

route.delete('/', deleteMembresia)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 