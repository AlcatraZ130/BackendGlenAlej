const express = require('express');
const router = express.Router();
const administracionController = require('../controllers/administracionController'); 

// Crear un nuevo vehículo (solo administradores)
router.post('/crear-vehiculo',  administracionController.crearVehiculo);

// Obtener todos los vehículos (solo administradores)
router.get('/ver-vehiculos', administracionController.obtenerVehiculos);

// Modificar un vehículo (solo administradores)
router.put('/modificar-vehiculo/:id', administracionController.modificarVehiculo);

// Borrar un vehículo (solo administradores)
router.delete('/borrar-vehiculo/:id', administracionController.borrarVehiculo);

// Obtener todos los conductores (solo administradores)
router.get('/ver-conductores',  administracionController.obtenerConductores);

// Asignar una ruta a un conductor (solo administradores)
router.post('/asignar-ruta',  administracionController.asignarRutaAConductor);

// Obtener todas las rutas (solo administradores)
router.get('/ver-rutas', administracionController.obtenerRutas);

// Modificar una ruta (solo administradores)
router.put('/modificar-ruta/:id', administracionController.modificarRuta);

// Borrar una ruta (solo administradores)
router.delete('/borrar-ruta/:id',  administracionController.borrarRuta);

// Obtener información relevante para el administrador
router.get('/resumen',  administracionController.obtenerResumen);

module.exports = router;
