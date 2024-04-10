const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getMembresias, postMembresias, putMembresias, deleteMembresias } = require('../controllers/Membresias')

route.get('/', getMembresias)

route.post('/', postMembresias)

route.put('/', putMembresias)

route.delete('/', deleteMembresias)
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