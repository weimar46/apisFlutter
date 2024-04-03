const {Schema, model} = require('mongoose')

const membresiaSchema = ({
    idMembresia:{
        type: Number,
        unique: true,
        required:[true, 'El id de la servicios  es necesaria']
    },

    nombreMembresia: {
        type:String,
        required:[true, 'El nombre de la servicios es requerida'],
    },
    precioMembresia: {
        type:String,
        required:[true, 'El precio de la servicios es requerida'],
    },
    frecuenciaMembresia:{
        type:String,
        required:[true, 'La frecuencia de la servicios es requerida'],
    },

    fechaInicio:{
        type:String,
        required:[true, 'La fecha de inicio de la servicios es requeriad'],
    },

    fechaFin:{
        type:String,
        required:[true, 'La fecha fin de la servicios es requeriad'],
    }

    
})


module.exports = model('membresias', membresiaSchema)