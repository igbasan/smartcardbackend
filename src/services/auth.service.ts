import db from '../database/models';
import { hospitalIn, patientIn } from '../interface/auth.interface';
const { Op } = require("sequelize");

require('dotenv').config();

export const registerAHospital = async (data: hospitalIn) => {

    try {
        const newHospital = await db.hospital.create(data);
        let result = newHospital.get({ plain: true }); // convert to js object
        delete result.password
        return result;
    } catch (error: any) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error(`${error.errors[0].path} already exists`)
        }
        console.log(error);
        throw new Error('There was an error registering hospital')
    }
}

export const registerAPatient = async (hospitalId: number | undefined, data: patientIn) => {
    
    try {
        const results = await db.sequelize.transaction(async (t) => {
            // store the patient record
            const newPatient = await db.patient.create(data, { transaction: t });

            // map the patient to the hospital
            try {
                await db.hospital_patient.create({ id_hospital: hospitalId, id_patient: newPatient.id }, { transaction: t })
            } catch (error) {
                throw new Error('Unable to map hospital to patient')
            }
            

            return newPatient.get({ plain: true });;

        });

        return results
    } catch (error: any) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error(`${error.errors[0].path} already exists`)
        }
        throw new Error("there is an error registering patient")
    }
}
