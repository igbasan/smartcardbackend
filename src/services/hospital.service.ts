import db from '../database/models';
import { hospitalUpdate } from '../interface/auth.interface';


export const getAHospital = async (hospitalId: number | undefined) => {
    try {
        const details = await db.hospital.findOne({ 
            where: { 
                id: hospitalId 
            },
            attributes: {
                exclude: ['password']
            }
        })
        return details
    } catch (error) {
        console.log(error);
        throw new Error('Unable to fetch hospital')
    }
}

export const getAHospitalByEmail = async (email: string) => {
    try {
        const details = await db.hospital.findOne({ 
            where: { 
                email 
            }
        })
        return details; // returns null if not found
    } catch (error) {
        console.log(error);
        throw new Error('Unable to complete request')
    }
}

export const updateHospitalProfile = async(hospitalId: number | undefined, data:hospitalUpdate) => {
    try {
        await db.hospital.update(data, {
            where: {
                id: hospitalId
            }
        })
        return true;
    } catch (error) {
        throw new Error('Unable to update profile, contact admin!')
    }
}