import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, updateHospital, registerPatient, getPatientProfile, updatePatientProfile } from '../controllers/auth.controller';
import { verifyToken } from '../helpers/auth.helper';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)

authRouter.post('/patient/register', registerPatient);
authRouter.put('/patient', verifyToken, updatePatientProfile);
authRouter.get('/patient', verifyToken, getPatientProfile)
authRouter.get('/', verifyToken,getHospitalDetail)

authRouter.put('/', verifyToken, updateHospital)


export default authRouter;