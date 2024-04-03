const {response} = require('express')

Servicio = require('../models/servicios')

const getServicio = async(req, res) => {
    const servicio = await Servicio.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: servicio
    })
}

const postServicio = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const servicio = new Servicio(datos) //Instanciar el objeto
        await servicio.save()//Guardar en la base de datos  
        console.log(servicio) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putServicio = async(req, res) =>{
    const {idServicio,nombreServicio,precioServicio, frecuenciaServicio, fechaInicio,fechaFin } = req.body
    try {
        const servicio = await Servicio.findOneAndUpdate({idServicio: idServicio},{
            nombreServicio: nombreServicio,
            precioServicio: precioServicio,
            frecuenciaServicio:frecuenciaServicio,
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

const deleteServicio = async(req, res) =>{
    const {idServicio} = req.body //Desestructurar
    try {
        const servicio = await Servicio.findOneAndDelete({idServicio: idServicio})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getServicio,
    postServicio,
    putServicio,
    deleteServicio
}