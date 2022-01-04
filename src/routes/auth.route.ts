import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, registerPatient, loginPatient } from '../controllers/auth.controller';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)
authRouter.get('/:regNo', getHospitalDetail)
authRouter.post('/patient/register', registerPatient)
authRouter.post('/patient/login', loginPatient)


export default authRouter;