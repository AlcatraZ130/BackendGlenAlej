'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservas = sequelize.define('Reservas', {
    id_estudiante: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Estudiantes',
        key: 'id'
      }
    },
    id_ruta: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rutas',
        key: 'id'
      }
    },
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    timestamps: false  // Desactiva timestamps
  });

  Reservas.associate = function(models) {
    Reservas.belongsTo(models.Estudiantes, { foreignKey: 'id_estudiante', as: 'estudiante' });
    Reservas.belongsTo(models.Rutas, { foreignKey: 'id_ruta', as: 'ruta' });
  };

  return Reservas;
};
