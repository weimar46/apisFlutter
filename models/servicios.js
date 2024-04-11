const {Schema, model} = require('mongoose')

const MembresiaSchema = ({
    idMembresia:{
        type: Number,
        unique: true,
        required:true
    },

    nombreServicio: {
        type:String,
        required:true,
    },
    precioServicio: {
        type:String,
        required:true
    },
    frecuenciaServicio:{
        type:String,
        required:true
    },

    fechaInicio:{
        type:String,
        required:true
    },

    fechaFin:{
        type:String,
        required:true
    },
    observaciones:{
        type:String,
        required:true
    }

    
})


module.exports = model('Membresias', MembresiaSchema)