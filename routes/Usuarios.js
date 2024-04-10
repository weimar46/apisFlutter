const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/Usuarios')

route.get('/', getUsuarios)

route.post('/', postUsuarios)

route.put('/', putUsuarios)

route.delete('/', deleteUsuarios)
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