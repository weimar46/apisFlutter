const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getServicios, postServicios, putServicios, deleteMembresias } = require('../controllers/Servicios')

route.get('/', getServicios)

route.post('/', postServicios)

route.put('/', putServicios)

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