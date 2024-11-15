//serve.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rutasRoutes = require('./routes/rutasRoutes');
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const reservasRoutes = require('./routes/reservasRoutes');
const conductoresRoutes = require('./routes/conductoresRoutes');
const administracionRoutes = require('./routes/administracionRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200', 
  credentials: true
}));
app.use('/rutas', rutasRoutes);
app.use('/conductores', conductoresRoutes);
app.use('/reservas', reservasRoutes);
app.use('/estudiantes', estudiantesRoutes);
app.use('/administracion', administracionRoutes);
app.use('/rutas', rutasRoutes);
app.use('/usuarios', usuarioRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
