import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital } from './auth.controller';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/', loginHospital)
authRouter.get('/:regNo', getHospitalDetail)


export default authRouter;