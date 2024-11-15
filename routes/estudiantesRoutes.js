const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

// Obtener reservas del estudiante (solo estudiantes)
router.get('/mis-reservas', estudiantesController.verReservasEstudiante);

// Crear una nueva reserva (solo estudiantes)
router.post('/crear-reserva', estudiantesController.crearReserva);

// Modificar una reserva (solo estudiantes)
router.put('/modificar-reserva/:id', estudiantesController.modificarReserva);

// Borrar una reserva (solo estudiantes)
router.delete('/borrar-reserva/:id', estudiantesController.borrarReserva);

// Exportar el router
module.exports = router;
