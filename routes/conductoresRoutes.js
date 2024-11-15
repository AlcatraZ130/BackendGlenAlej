const express = require('express');
const router = express.Router();
const conductoresController = require('../controllers/conductoresController'); 

// Obtener todos los conductores (solo administradores)
router.get('/ver-conductores',  conductoresController.obtenerConductores);

// Obtener un conductor por ID (con su vehículo)
router.get('/:id',  conductoresController.obtenerConductorPorId);

// Modificar un conductor (solo administradores)
router.put('/modificar-conductor/:id', conductoresController.modificarConductor);

// Borrar un conductor (solo administradores)
router.delete('/borrar-conductor/:id', conductoresController.borrarConductor);

// Obtener vehículos de un conductor
router.get('/:id/vehiculos', conductoresController.obtenerVehiculosPorConductor);

module.exports = router;
