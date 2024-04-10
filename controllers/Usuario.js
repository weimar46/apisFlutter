const { response } = require('express');
const Usuario = require('../models/Usuario'); // Importar el modelo de Usuario

const iniciarSesion = async (req, res) => {
    const { nombreUsuario, password } = req.body;

    try {
        // Buscar el usuario en la base de datos por nombre de usuario
        const usuario = await Usuario.findOne({ nombreUsuario });

        if (!usuario) {
            return res.status(400).json({ msg: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña coincide
        const contraseñaValida = await usuario.compararContraseña(password);

        if (!contraseñaValida) {
            return res.status(400).json({ msg: 'Contraseña incorrecta' });
        }

        // Aquí puedes generar un token JWT para la sesión del usuario si lo deseas

        res.json({ msg: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
};

module.exports = {
    iniciarSesion
};
