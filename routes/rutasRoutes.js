const express = require('express');
const router = express.Router();
const rutasController = require('../controllers/rutasController');

router.get('/rutas', rutasController.getAllRutas);
router.post('/reservas', rutasController.crearReserva);
router.post('/rutas1', rutasController.createRuta);

module.exports = router;
