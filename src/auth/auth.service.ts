import db from '../database/models';
import { hospital } from './auth.models';

export const registerAHospital = async (data: hospital) => {
    try {
        const newHospital = await db.hospital.create(data);
        return newHospital;
    } catch (error) {
        console.log(error);
        throw new Error('There was an error registering hospital')
    }

}
