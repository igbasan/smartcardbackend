import express from 'express';
import { getPatientProfile, registerPatient, updatePatientProfile, linkPatientToHospital } from '../controllers/hospital.controller';
import { verifyHospitalToken } from '../helpers/auth.helper';

const patientRoute = express.Router();


patientRoute.post('/link', verifyHospitalToken, linkPatientToHospital)
patientRoute.post('/register', verifyHospitalToken, registerPatient);
patientRoute.put('/:patientId', verifyHospitalToken, updatePatientProfile);
patientRoute.get('/:patientId', verifyHospitalToken, getPatientProfile)




export default patientRoute;