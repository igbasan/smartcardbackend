import db from '../database/models';
import { patientIn } from '../interface/auth.interface';

export const getAPatient = async (hospitalId: number | undefined) => {
    try {
        const details = await db.hospital.findAll({
            where: {
                id: hospitalId
            },
            attributes: {
                exclude: ['password']
            },
            include: [
                {
                  model: db.patient,
                  as: "patients",
                },
              ],
        })
        details.forEach(detail => console.log(detail.toJSON()))
        return details;
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

export const updatePatient = async (patientId: number | undefined, data: patientIn) => {
    try {
        await db.patient.update(data, {
            where: {
                id: patientId
            }
        });
        return true
    } catch (error) {
        throw new Error("Unable to update patient profile")
    }
}