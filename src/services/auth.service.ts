import db from '../database/models';
import { hospital } from '../interface/auth.interface';

require('dotenv').config();

export const registerAHospital = async (data: hospital) => {
    try {
        const newHospital = await db.hospital.create(data);
        return newHospital;
    } catch (error) {
        console.log(error);
        throw new Error('There was an error registering hospital')
    }
}

export const getAHospital = async(regNo: string) => {
    try {
        const details = await db.hospital.findOne({ where: {hospital_reg:regNo } })
        return details
    } catch (error) {
        console.log(error);
        throw new Error('Unable to fetch hospital')
    }
}