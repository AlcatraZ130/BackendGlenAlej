const Ruta = require('../models/rutas');
const Reserva = require('../models/reservas');

// Mostrar todas las rutas
exports.getAllRutas = async (req, res) => {
  try {
    const rutas = await Ruta.findAll();
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener rutas' });
  }
};

// Crear una reserva para una ruta
exports.crearReserva = async (req, res) => {
  const { usuarioId, rutaId } = req.body;
  try {
    // Verificar el número de reservas para la ruta
    const reservasCount = await Reserva.count({ where: { rutaId } });
    if (reservasCount >= 40) {
      return res.status(400).json({ error: 'La ruta ya tiene 40 reservas' });
    }

    // Crear la reserva
    const nuevaReserva = await Reserva.create({ usuarioId, rutaId, fechaReserva: new Date() });
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
};

// Controlador para obtener rutas
exports.getRutas = (req, res) => {
  // Suponiendo que las rutas están almacenadas en una base de datos o en un array
  // Aquí solo es un ejemplo simple con datos ficticios
  const rutas = [
    { id: 1, origen: 'A', destino: 'B', horario: '08:00 AM' },
    { id: 2, origen: 'C', destino: 'D', horario: '09:00 AM' }
  ];
  res.json(rutas);
};

// Controlador para crear una nueva ruta
exports.createRuta = (req, res) => {
  const { origen, destino, horario } = req.body;

  if (!origen || !destino || !horario) {
    return res.status(400).json({ error: 'Faltan datos para crear la ruta.' });
  }

  // Aquí deberías agregar lógica para guardar la nueva ruta en tu base de datos
  // Por ejemplo, si usas Sequelize, podrías hacer algo como esto:
  
  // Ruta ficticia creada
  const nuevaRuta = {
    id: Math.floor(Math.random() * 1000), // Solo para ejemplo
    origen,
    destino,
    horario
  };

  // Responder con la nueva ruta creada
  res.status(201).json(nuevaRuta);
};
