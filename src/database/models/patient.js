'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  patient.init({
    firstName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    otherName: {
      type:DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genotype: {
      type: DataTypes.STRING,
    },
    bloodGroup: {
      type: DataTypes.STRING,
    },
    passport: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    localGovernmentArea: {
      type: DataTypes.STRING,
    },
    dataOfBirth: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};