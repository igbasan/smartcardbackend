import db from '../database/models';
import { hospitalIn, patientIn } from '../interface/auth.interface';
const { Op } = require("sequelize");

require('dotenv').config();

export const registerAHospital = async (data: hospitalIn) => {

    // check if email or phone number already exists
    const hospitalExist = await db.hospital.findOne({
        where: {
            [Op.or]: [
                { email: data.email },
                { phoneNumber: data.phoneNumber }
            ]
        }
    })

    if (hospitalExist) {
        throw new Error("An hospital with email or phonenumber already exists");
    }
    try {
        const newHospital = await db.hospital.create(data);
        let result = newHospital.get({ plain: true }); // convert to js object
        delete result.password
        return result;
    } catch (error) {
        throw new Error('There was an error registering hospital')
    }
}

export const registerAPatient = async (hospitalId: number | undefined, data: patientIn) => {
    //check if email or phone number exist
    const patientExist = await db.patient.findOne({
        where: {
            [Op.or]: [
                { email: data.email },
                { phoneNumber: data.phoneNumber }
            ]
        }
    })

    if (patientExist) {
        throw new Error("A patient already have this email and phone number")
    }
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
    } catch (error) {
        throw new Error("there is an error registering patient")
    }
}
