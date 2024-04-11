const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getServicio, postServicio, putServicio, deleteServicio } = require('../controllers/servicios')

route.get('/', getServicio)

route.post('/', postServicio)

route.put('/', putServicio)

route.delete('/', deleteServicio)
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