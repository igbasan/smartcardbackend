import db from '../database/models';
import { hospitalIn } from '../interface/auth.interface';
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

export const getAHospital = async (regNo: string) => {
    try {
        const details = await db.hospital.findOne({ where: { hospital_reg: regNo } })
        return details
    } catch (error) {
        console.log(error);
        throw new Error('Unable to fetch hospital')
    }
}