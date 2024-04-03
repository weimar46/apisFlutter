const {response} = require('express')

const Membresia = require('../models/Membresias')

const getMembresia = async(req, res) => {
    const membresia = await Membresia.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: membresia
    })
}

const postMembresia = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const membresia = new Membresia(datos) //Instanciar el objeto
        await membresia.save()//Guardar en la base de datos  
        console.log(membresia) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putMembresia = async(req, res) =>{
    const {idMembresia,nombreMembresia,precioMembresia, frecuenciaMembresia, fechaInicio,fechaFin } = req.body
    try {
        const membresia = await Membresia.findOneAndUpdate({idMembresia: idMembresia},{
            nombreMembresia: nombreMembresia,
            precioMembresia: precioMembresia,
            frecuenciaMembresia:frecuenciaMembresia,
            fechaInicio:fechaInicio,
            fechaFin: fechaFin
          


        });//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteMembresia = async(req, res) =>{
    const {idServicio} = req.body //Desestructurar
    try {
        const membresia = await Membresia.findOneAndDelete({idMembresia: idMembresia})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getMembresia,
    postMembresia,
    putMembresia,
    deleteMembresia
}