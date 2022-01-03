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
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.TEXT,
    domain: {
      type: DataTypes.STRING,
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
    hospital_reg: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'hospital',
  });
  return hospital;
};