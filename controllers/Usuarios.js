const {response} = require('express')

const Usuarios = require('../models/Usuarios')

const getUsuarios = async(req, res) => {
    const usuarios = await Usuarios.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: usuarios
    })
}

const postUsuarios = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const usuarios = new Usuarios(datos) //Instanciar el objeto
        await usuarios.save()//Guardar en la base de datos  
        console.log(usuarios) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putUsuarios = async(req, res) =>{
    const {idUsuario,nombreUsuario,pasword } = req.body
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

const deleteUsuarios = async(req, res) =>{
    const {idUsuario} = req.body //Desestructurar
    try {
        const usuarios = await Usuarios.findOneAndDelete({idUsuario: idUsuario})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}