const { Router } = require('express');
const router = Router();

// Importar el controlador de usuarios
const { loginUser } = require('../controllers/usuarios');

// Ruta para el inicio de sesión
router.post('/login', loginUser);

// Otras rutas relacionadas con usuarios, como registro, actualización, eliminación, etc.
// router.post('/registro', createUser);
// router.put('/actualizar/:id', updateUser);
// router.delete('/eliminar/:id', deleteUser);

module.exports = router;
