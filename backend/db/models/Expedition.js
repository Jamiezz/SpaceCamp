'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expedition = sequelize.define('Expedition', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDate: DataTypes.INTEGER,
    endDate: DataTypes.INTEGER,
    endDateGoal: DataTypes.INTEGER
  }, {});
  Expedition.associate = function(models) {
    const columnMapping = {
      through: 'User_Expedition',
      otherKey: 'UserId',
      ForeignKey: 'ExpeditionId'
    }
    Expedition.belongsToMany(models.User, columnMapping)
  };
  return Expedition;
};