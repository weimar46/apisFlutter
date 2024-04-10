const {response} = require('express')

Usuario = require('../models/Usuario')

const getUsuario = async(req, res) => {
    const usuario = await Usuario.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: usuario
    })
}

const postUsuario = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const usuario = new Usuario(datos) //Instanciar el objeto
        await usuario.save()//Guardar en la base de datos  
        console.log(usuario) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putUsuario = async(req, res) =>{
    const {idUsuario, } = req.body
    try {
        const usuario = await Usuario.findOneAndUpdate({idUsuario: idUsuario},{
            nombreUsuario: nombreUsuario,
            pasword: pasword,
            


        });//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteUsuario = async(req, res) =>{
    const {idUsuario} = req.body //Desestructurar
    try {
        const usuario = await Usuario.findOneAndDelete({idUsuario: idUsuario})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}