'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rutas = sequelize.define('Rutas', {
    origen: DataTypes.STRING,
    destino: DataTypes.STRING,
    hora_salida: DataTypes.TIME,
    hora_llegada: DataTypes.TIME,
    id_vehiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vehiculos',
        key: 'id'
      }
    }
  }, {
    timestamps: false  
  });

  Rutas.associate = function(models) {
    Rutas.belongsTo(models.Vehiculos, { foreignKey: 'id_vehiculo', as: 'vehiculo' });
    Rutas.hasMany(models.Reservas, { foreignKey: 'id_ruta', as: 'reservas' });
  };

  return Rutas;
};
