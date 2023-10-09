const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Executor extends Model {
    static associate({ Song}) {
      this.hasMany(Song, { foreignKey: 'executorId' });
    }
  }
  Executor.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    style: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    premium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Executor',
  });
  return Executor;
};
