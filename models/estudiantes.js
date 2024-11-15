'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estudiantes = sequelize.define('Estudiantes', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    matricula: DataTypes.STRING,
    rol: { // Añadimos el rol de estudiante
      type: DataTypes.STRING,
      defaultValue: 'estudiante'
    }
  }, {
    timestamps: false  
  });

  Estudiantes.associate = function(models) {
    Estudiantes.hasMany(models.Reservas, { foreignKey: 'id_estudiante', as: 'reservas' });
  };

  return Estudiantes;
};
