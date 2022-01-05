import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, updateHospital } from '../controllers/auth.controller';
import { verifyToken } from '../helpers/auth.helper';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)

authRouter.get('/', verifyToken,getHospitalDetail)

authRouter.put('/', verifyToken, updateHospital)


export default authRouter;