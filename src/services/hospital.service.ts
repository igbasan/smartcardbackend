import db from '../database/models';


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