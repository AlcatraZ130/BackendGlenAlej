const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController'); 

// Registrar un nuevo usuario (estudiante, conductor, administrador)
router.post('/registrar', usuarioController.registrarUsuario);

// Login de usuario
router.post('/login', usuarioController.loginUsuario);

// Ruta para obtener el perfil del usuario autenticado
router.get('/profile', usuarioController.getUserProfile); // Corregido aquí

// Exportar el router
module.exports = router;
