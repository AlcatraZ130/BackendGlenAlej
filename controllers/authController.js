//controllers/authController.js
exports.loginUsuario = async (req, res) => {
  const { nombre, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { nombre } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!contrasenaValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Agregar console.log para verificar el token
    console.log("Token generado:", token);

    res.status(200).json({
      message: 'Login exitoso',
      token,
      user: { nombre: usuario.nombre, rol: usuario.rol }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el login', error: error.message });
  }
};
