import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, updateHospital} from '../controllers/auth.controller';
import { registerPatient, updatePatientProfile, getPatientProfile } from '../controllers/hospital.controller';
import { verifyHospitalToken } from '../helpers/auth.helper';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)


authRouter.get('/', verifyHospitalToken,getHospitalDetail)

authRouter.put('/', verifyHospitalToken, updateHospital)

authRouter.post('/patient/register', verifyHospitalToken, registerPatient);
authRouter.put('/patient', verifyHospitalToken, updatePatientProfile);
authRouter.get('/patient/:patientId', verifyHospitalToken, getPatientProfile)


export default authRouter;