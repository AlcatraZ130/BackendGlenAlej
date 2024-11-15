//models/usuario.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: { 
      type: DataTypes.ENUM('administrador', 'conductor', 'estudiante'),
      defaultValue: 'estudiante'  
    }
  }, { timestamps: false });
  
  Usuario.associate = function(models) {
  
  };
  
  return Usuario;
};
