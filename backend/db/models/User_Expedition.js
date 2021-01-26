'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Expedition = sequelize.define('User_Expedition', {
    userId: DataTypes.STRING,
    expeditionId: DataTypes.STRING
  }, {});
  User_Expedition.associate = function(models) {
    // associations can be defined here
  };
  return User_Expedition;
};