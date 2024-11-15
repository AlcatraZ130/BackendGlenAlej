'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehiculos = sequelize.define('Vehiculos', {
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
    id_conductor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Conductores',
        key: 'id'
      }
    }
  }, {
    timestamps: false  
  });

  Vehiculos.associate = function(models) {
    Vehiculos.belongsTo(models.Conductores, { foreignKey: 'id_conductor', as: 'conductor' });
    Vehiculos.hasMany(models.Rutas, { foreignKey: 'id_vehiculo', as: 'rutas' });
  };

  return Vehiculos;
};
