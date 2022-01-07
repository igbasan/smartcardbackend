import db from '../database/models';

export const getAProfileByEmail = async (email: string) => {
    try {
        const details = await db.patient.findOne({ 
            where: { 
<<<<<<< HEAD
                email 
=======
               email 
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71
            }
        })
        return details
    } catch (error) {
      throw new Error('unable to complete request')  
    }
}