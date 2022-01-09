import db from '../database/models';
import { hospitalUpdate, patientIn, patientUpdate } from '../interface/auth.interface';


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
        let details = await db.hospital.findOne({
            where: {
                email
            }
        });
        return details// returns null if not found
    } catch (error) {
        console.log(error);
        throw new Error('Unable to complete request')
    }
}

export const updateHospitalProfile = async (hospitalId: number | undefined, data: hospitalUpdate) => {
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

export const getAPatient = async (patientId: string) => {
    // patient id is not the database generated id during registration
    try {
        const details = await db.patient.findOne({
            where: {
                patientId
            }
        })
        return details
    } catch (error) {
        throw new Error('Unable to fetch patient') 
    }
};

export const getAProfileByEmail = async (email: string) => {
    try {
        const details = await db.patient.findOne({ 
            where: { 
               email 
            }
        })
        return details
    } catch (error) {
      throw new Error('unable to complete request')  
    }
}

export const updatePatient = async (patientId: string | undefined, data: patientUpdate) => {
    try {
        const patient = db.patient.findOne({
            where:{
                patientId
            }
        })
        if (!patient) { throw new Error('No patient with such id!')};
        await db.patient.update(data, {
            where: {
                patientId
            }
        });
        return true
    } catch (error) {
        throw new Error("Unable to update patient profile")
    }
}