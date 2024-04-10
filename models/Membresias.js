const {Schema, model} = require('mongoose')

const MembresiaSchema = ({
    idMembresia:{
        type: Number,
        unique: true,
        required:true
    },

    nombreMembresia: {
        type:String,
        required:true,
    },
    precioMembresia: {
        type:String,
        required:true
    },
    frecuenciaMembresia:{
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
    iva:{
        type:String,
        required:true
    }

    
})


module.exports = model('Membresias', MembresiaSchema)