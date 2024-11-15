const { Reservas, Rutas } = require('../models');

// Ver reservas del estudiante
exports.verReservasEstudiante = async (req, res) => {
  try {
    const reservas = await Reservas.findAll({ 
      where: { id_estudiante: req.usuario.id }, // Usa el ID del estudiante desde el token
      include: [{ model: Rutas, as: 'ruta' }] 
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas', error: error.message });
  }
};

// Crear una nueva reserva
exports.crearReserva = async (req, res) => {
  const { id_ruta, fecha, estado } = req.body;

  try {
    const nuevaReserva = await Reservas.create({ 
      id_estudiante: req.usuario.id, // Asigna el ID del estudiante desde el token
      id_ruta, 
      fecha, 
      estado 
    });
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error: error.message });
  }
};

// Modificar una reserva
exports.modificarReserva = async (req, res) => {
  const { id } = req.params; // ID de la reserva
  const { fecha, estado } = req.body; // Nuevos datos de la reserva

  try {
    const reserva = await Reservas.findByPk(id);
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });

    // Solo el estudiante que hizo la reserva puede modificarla
    if (reserva.id_estudiante !== req.usuario.id) {
      return res.status(403).json({ message: 'Acceso denegado. No tienes permiso para modificar esta reserva.' });
    }

    await reserva.update({ fecha, estado });
    res.status(200).json({ message: 'Reserva modificada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar la reserva', error: error.message });
  }
};

// Borrar una reserva
exports.borrarReserva = async (req, res) => {
  const { id } = req.params; // ID de la reserva

  try {
    const reserva = await Reservas.findByPk(id);
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });

    // Solo el estudiante que hizo la reserva puede borrarla
    if (reserva.id_estudiante !== req.usuario.id) {
      return res.status(403).json({ message: 'Acceso denegado. No tienes permiso para borrar esta reserva.' });
    }

    await reserva.destroy();
    res.status(200).json({ message: 'Reserva borrada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar la reserva', error: error.message });
  }
};
