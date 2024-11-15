'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conductores = sequelize.define('Conductores', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    licencia: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    rol: { // Añadimos el rol de conductor
      type: DataTypes.STRING,
      defaultValue: 'conductor'
    }
  }, {
    timestamps: false  
  });

  Conductores.associate = function(models) {
    Conductores.hasMany(models.Vehiculos, { foreignKey: 'id_conductor', as: 'vehiculos' });
  };

  return Conductores;
};
