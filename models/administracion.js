'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administracion = sequelize.define('Administracion', {
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: { // Añadimos el rol de administrador
      type: DataTypes.STRING,
      defaultValue: 'administrador'
    }
  }, {
    timestamps: false  
  });

  return Administracion;
};
