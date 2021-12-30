import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital } from './auth.controller';

const authRouter = express.Router();


authRouter.post('/', registerHospital)
authRouter.post('/', loginHospital)
authRouter.post('/', getHospitalDetail)