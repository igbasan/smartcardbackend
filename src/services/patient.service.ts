import db from '../database/models';

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