const {response} = require('express')

const Membresias = require('../models/Membresias')

const getMembresias = async(req, res) => {
    const membresias = await Membresias.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: membresias
    })
}

const postMembresias = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const membresias = new Membresias(datos) //Instanciar el objeto
        await membresias.save()//Guardar en la base de datos  
        console.log(membresias) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putMembresias = async(req, res) =>{
    const {idMembresia,nombreMembresia,precioMembresia, frecuenciaMembresia, fechaInicio,fechaFin,iva } = req.body
    try {
        const membresias = await Membresias.findOneAndUpdate({idMembresia: idMembresia},{
            nombreMembresia: nombreMembresia,
            precioMembresia: precioMembresia,
            frecuenciaMembresia:frecuenciaMembresia,
            fechaInicio:fechaInicio,
            fechaFin: fechaFin,
            iva:iva


        });//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteMembresias = async(req, res) =>{
    const {idMembresia} = req.body //Desestructurar
    try {
        const membresias = await Membresias.findOneAndDelete({idMembresia: idMembresia})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getMembresias,
    postMembresias,
    putMembresias,
    deleteMembresias
}