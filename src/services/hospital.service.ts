import db from '../database/models';
import { NotFound, ServerError, UnauthorizedAccessError } from '../errors/hospital.errors';
import { hospitalUpdate, patientUpdate } from '../interface/auth.interface';


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
        throw new ServerError('Unable to fetch hospital', 500)
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
        throw new ServerError('Unable to complete request', 500)
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
        throw new ServerError('Unable to update profile, contact admin!', 500)
    }
}

export const getAPatient = async (patientId: string, hospitalId: number | undefined) => {
    // note:patient id is not the database generated id during registration but assigned id
    // hospital id : db generated id for hospital upon registration

    try {
        const patient = await db.patient.findOne({
            where: {
                patientId
            }
        })

        if (patient) {
            // prevent unlinked hospitals from accessing patient records
            const isLinked = await db.hospital_patient.findOne({
                where: {
                    id_patient: patient.id,
                    id_hospital: hospitalId
                }
            })
            if(!isLinked) {
                throw new UnauthorizedAccessError('Your hospital is not linked with this patient!', 403)
            }
        }
        return patient
    } catch (error) {
        throw error
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
        throw new ServerError('unable to complete request',500)
    }
}

export const updatePatient = async (patientId: string | undefined, data: patientUpdate) => {
    try {
        const patient = db.patient.findOne({
            where: {
                patientId
            }
        })
        if (!patient) { throw new NotFound('No patient with such id!', 404) };
        await db.patient.update(data, {
            where: {
                patientId
            }
        });
        return true
    } catch (error) {
        throw error
    }
}

export const linkHospitalToPatient = async(patientId: string, hospitalId: number | undefined) => {
    try {
        const patient = await db.patient.findOne({
            where: {
                patientId
            }
        });

        if(patient === null) { throw new NotFound(`patient with id ${patientId} does not exists`,404)}
        const hospital = await db.hospital.findOne({
            where:{
                id: hospitalId
            }
        })
        if(hospital === null) { throw new NotFound(`hosptial with id ${hospitalId} does not exists`, 404 )}

        const linked = await db.hospital_patient.findOrCreate({
            where:{
                id_patient: patient.id,
                id_hospital: hospital.id
            }
        })
        return linked;
    } catch (error) {
        throw error;
    }
}