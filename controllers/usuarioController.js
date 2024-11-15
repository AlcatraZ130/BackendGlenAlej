//controllers/usuarioController.js
const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registrar un nuevo usuario
exports.registrarUsuario = async (req, res) => {
  const { nombre, correo, contrasena, rol } = req.body;

  try {
    // Hasheamos la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = await Usuario.create({
      nombre,
      correo,
      contrasena: hashedPassword,
      rol,
    });

    res.status(201).json({ message: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
};

// Controlador para el login
exports.loginUsuario = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
      // Buscar el usuario por correo
      const usuario = await Usuario.findOne({ where: { correo } });

      if (!usuario) {
          return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Comparar la contraseña
      const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
      if (!esValida) {
          return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      return res.status(200).json({ message: "Login exitoso" /*, token */ });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error en el login", error });
  }
};

exports.getUserProfile = (req, res) => {
  const userId = req.user.id; 
  
  User.findByPk(userId)  
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user); // Devuelve los datos del usuario
    })
    .catch(error => res.status(500).json({ error: 'An error occurred' }));
};
