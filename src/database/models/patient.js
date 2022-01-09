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

      patient.belongsToMany(models.hospital, { 
        through: "hospital_patients", 
        as: "hospitals", 
        foreignKey: 'id_patient', 
        otherKey: 'id_hospital' 
      })
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
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    password: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    nin: {
      type: DataTypes.STRING
    },
    patientId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};