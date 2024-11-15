const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

// GET - Ver reservas del estudiante (solo estudiantes)
router.get('/mis-reservas', reservasController.verReservasEstudiante);

// PUT y DELETE para modificar y borrar reservas (estudiantes y administradores)
router.put('/modificar-reserva/:id',  reservasController.modificarReserva);
router.delete('/borrar-reserva/:id',  reservasController.borrarReserva);

module.exports = router;
