const { Vehiculos, Conductores, Rutas } = require('../models');

// Crear un nuevo vehículo
exports.crearVehiculo = async (req, res) => {
  const { placa, modelo, capacidad, id_conductor } = req.body;

  // Validar que todos los campos estén presentes
  if (!placa || !modelo || !capacidad || !id_conductor) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const nuevoVehiculo = await Vehiculos.create({ placa, modelo, capacidad, id_conductor });
    res.status(201).json(nuevoVehiculo);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el vehículo', error: error.message });
  }
};

// Obtener todos los vehículos
exports.obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculos.findAll();
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener vehículos', error: error.message });
  }
};

// Modificar un vehículo
exports.modificarVehiculo = async (req, res) => {
  const { id } = req.params; // ID del vehículo
  const { placa, modelo, capacidad } = req.body; // Nuevos datos del vehículo

  try {
    const vehiculo = await Vehiculos.findByPk(id);
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' });

    await vehiculo.update({ placa, modelo, capacidad });
    res.status(200).json({ message: 'Vehículo modificado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar el vehículo', error: error.message });
  }
};

// Borrar un vehículo
exports.borrarVehiculo = async (req, res) => {
  const { id } = req.params; // ID del vehículo

  try {
    const vehiculo = await Vehiculos.findByPk(id);
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' });

    await vehiculo.destroy();
    res.status(200).json({ message: 'Vehículo borrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar el vehículo', error: error.message });
  }
};

// Obtener todos los conductores
exports.obtenerConductores = async (req, res) => {
  try {
    const conductores = await Conductores.findAll();
    res.status(200).json(conductores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener conductores', error: error.message });
  }
};

// Asignar una ruta a un conductor
exports.asignarRutaAConductor = async (req, res) => {
  const { id_conductor, id_ruta } = req.body;

  // Validar que ambos campos estén presentes
  if (!id_conductor || !id_ruta) {
    return res.status(400).json({ message: 'Los campos id_conductor e id_ruta son obligatorios' });
  }
};

// Obtener todas las rutas
exports.obtenerRutas = async (req, res) => {
  try {
    const rutas = await Rutas.findAll();
    res.status(200).json(rutas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener rutas', error: error.message });
  }
};

// Modificar una ruta
exports.modificarRuta = async (req, res) => {
  const { id } = req.params; // ID de la ruta
  const { origen, destino, hora_salida, hora_llegada, id_vehiculo } = req.body;

  try {
    const ruta = await Rutas.findByPk(id);
    if (!ruta) return res.status(404).json({ message: 'Ruta no encontrada' });

    await ruta.update({ origen, destino, hora_salida, hora_llegada, id_vehiculo });
    res.status(200).json({ message: 'Ruta modificada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar la ruta', error: error.message });
  }
};

// Borrar una ruta
exports.borrarRuta = async (req, res) => {
  const { id } = req.params; // ID de la ruta

  try {
    const ruta = await Rutas.findByPk(id);
    if (!ruta) return res.status(404).json({ message: 'Ruta no encontrada' });

    await ruta.destroy();
    res.status(200).json({ message: 'Ruta borrada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar la ruta', error: error.message });
  }
};

// Obtener información relevante para el administrador
exports.obtenerResumen = async (req, res) => {
  try {
    const vehiculos = await Vehiculos.findAll();
    const conductores = await Conductores.findAll();
    const rutas = await Rutas.findAll();
    
    res.status(200).json({
      vehiculos,
      conductores,
      rutas
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el resumen', error: error.message });
  }
};
