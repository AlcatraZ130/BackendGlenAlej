const { Conductores, Vehiculos } = require('../models');

// Obtener todos los conductores
exports.obtenerConductores = async (req, res) => {
  try {
    const conductores = await Conductores.findAll();
    res.status(200).json(conductores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener conductores', error: error.message });
  }
};

// Obtener un conductor por ID (con su vehículo)
exports.obtenerConductorPorId = async (req, res) => {
  const { id } = req.params; // ID del conductor

  try {
    const conductor = await Conductores.findOne({
      where: { id },
      include: [{ model: Vehiculos, as: 'vehiculo' }] // Incluye el vehículo asociado
    });

    if (!conductor) return res.status(404).json({ message: 'Conductor no encontrado' });

    res.status(200).json(conductor);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el conductor', error: error.message });
  }
};

// Modificar un conductor
exports.modificarConductor = async (req, res) => {
  const { id } = req.params; // ID del conductor
  const { nombre, correo, telefono } = req.body; 

  try {
    const conductor = await Conductores.findByPk(id);
    if (!conductor) return res.status(404).json({ message: 'Conductor no encontrado' });

    await conductor.update({ nombre, correo, telefono });
    res.status(200).json({ message: 'Conductor modificado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar el conductor', error: error.message });
  }
};

// Borrar un conductor
exports.borrarConductor = async (req, res) => {
  const { id } = req.params; // ID del conductor

  try {
    const conductor = await Conductores.findByPk(id);
    if (!conductor) return res.status(404).json({ message: 'Conductor no encontrado' });

    await conductor.destroy();
    res.status(200).json({ message: 'Conductor borrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar el conductor', error: error.message });
  }
};

// Obtener vehículos de un conductor
exports.obtenerVehiculosPorConductor = async (req, res) => {
  const { id } = req.params; // ID del conductor

  try {
    const vehiculos = await Vehiculos.findAll({ where: { id_conductor: id } });
    if (vehiculos.length === 0) return res.status(404).json({ message: 'No se encontraron vehículos para este conductor' });

    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener vehículos', error: error.message });
  }
};
