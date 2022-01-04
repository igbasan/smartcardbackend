import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, registerPatient, loginPatient } from '../controllers/auth.controller';
import { verifyToken } from '../helpers/auth.helper';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)
authRouter.post('/patient/register', registerPatient)
authRouter.post('/patient/login', loginPatient)
authRouter.get('/:regNo', verifyToken,getHospitalDetail)


export default authRouter;