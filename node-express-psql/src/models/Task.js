
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('ToDo', 'InProgress', 'Done', 'Deleted'),
      defaultValue: 'ToDo',
      allowNull: false,
    },
  },
  {
    tableName: 'Tasks',
    underscored: true,
  });

  return Task;
};
