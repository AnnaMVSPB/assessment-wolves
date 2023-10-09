const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate({Executor}) {
      this.belongsTo(Executor, { foreignKey: 'executorId' }); 
    }
  }
  Song.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    executorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Executors',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    hit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
