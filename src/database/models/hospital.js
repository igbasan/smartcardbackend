'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hospital.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    domain: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    hospital_reg: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hospital',
  });
  return hospital;
};