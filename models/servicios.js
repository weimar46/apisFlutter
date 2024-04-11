const {Schema, model} = require('mongoose')

const servicioSchema = ({
    idServicio:{
        type: Number,
        unique: true,
        required:[true, 'El id de la servicios  es necesaria']
    },

    nombreServicio: {
        type:String,
        required:[true, 'El nombre de la servicios es requerida'],
    },
    precioServicio: {
        type:String,
        required:[true, 'El precio de la servicios es requerida'],
    },
    frecuenciaServicio:{
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
    },
    observaciones:{
        type:String,
        required:[true, 'La fecha fin de la servicios es requeriad'],
    }
    
})


module.exports = model('servicios', servicioSchema)