const {response} = require('express')

const Servicios = require('../models/servicios')

const getServicios = async(req, res) => {
    const servicios = await Servicios.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: servicios
    })
}

const postServicios = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const servicios = new Servicios(datos) //Instanciar el objeto
        await servicios.save()//Guardar en la base de datos  
        console.log(servicios) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putServicios = async(req, res) =>{
    const {idServicio,nombreServicio,precioServicio, frecuenciaServicio, fechaInicio,fechaFin,observaciones } = req.body
    try {
        const servicios = await Servicios.findOneAndUpdate({idServicio: idServicio},{
            nombreServicio: nombreServicio,
            precioServicio: precioServicio,
            frecuenciaServicio:frecuenciaServicio,
            fechaInicio:fechaInicio,
            fechaFin: fechaFin,
            observaciones:observaciones


        });//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteServicios = async(req, res) =>{
    const {idServicio} = req.body //Desestructurar
    try {
        const servicios = await Membresias.findOneAndDelete({idServicio: idServicio})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

module.exports = {
    getServicios,
    postServicios,
    putServicios,
    deleteServicios
}