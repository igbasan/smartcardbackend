import express from 'express';
<<<<<<< HEAD
import { getHospitalDetail, loginHospital, registerHospital, registerPatient, loginPatient } from '../controllers/auth.controller';
=======
import { getHospitalDetail, loginHospital, registerHospital, updateHospital, registerPatient } from '../controllers/auth.controller';
import { verifyToken } from '../helpers/auth.helper';
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)
<<<<<<< HEAD
authRouter.get('/:regNo', getHospitalDetail)
authRouter.post('/patient/register', registerPatient)
authRouter.post('/patient/login', loginPatient)
=======
authRouter.post('/patient/register', registerPatient)
authRouter.get('/:regNo', verifyToken,getHospitalDetail)

authRouter.get('/', verifyToken,getHospitalDetail)

authRouter.put('/', verifyToken, updateHospital)
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71


export default authRouter;