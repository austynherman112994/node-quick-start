
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
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
    tableName: 'Projects',
    underscored: true,
  });

  return Project;
}
