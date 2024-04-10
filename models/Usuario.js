const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Otros campos de usuario que puedan ser relevantes
});

module.exports = model('Usuario', usuarioSchema);
