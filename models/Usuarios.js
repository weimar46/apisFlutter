const {Schema, model} = require('mongoose')

const usuarioSchema = ({
    idUsuario:{
        type: Number,
        unique: true,
        required:[true, 'El id de la servicios  es necesaria']
    },

    nombreUsuario: {
        type:String,
        required:[true, 'El nombre de la servicios es requerida'],
    },
    pasword: {
        type:String,
        required:[true, 'El precio de la servicios es requerida'],
    }
})


module.exports = model('Usaurio', usuarioSchema)