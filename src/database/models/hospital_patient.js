'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hospital_patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hospital_patient.belongsTo(models.hospital, {foreignKey: 'id_hospital'}),
      hospital_patient.belongsTo(models.patient, {foreignKey: 'id_patient'})
    }
  };
  hospital_patient.init({
    id_hospital: DataTypes.INTEGER,
    id_patient: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hospital_patient',
  });
  return hospital_patient;
};