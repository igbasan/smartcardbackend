import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, updateHospital} from '../controllers/auth.controller';
import { registerPatient, updatePatientProfile, getPatientProfile } from '../controllers/hospital.controller';
import { verifyHospitalToken } from '../helpers/auth.helper';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)
<<<<<<< HEAD
authRouter.post('/patient/register', registerPatient)

authRouter.get('/:regNo', verifyToken,getHospitalDetail)
authRouter.get('/', verifyToken,getHospitalDetail)

authRouter.put('/', verifyToken, updateHospital)
=======


authRouter.get('/', verifyHospitalToken,getHospitalDetail)

authRouter.put('/', verifyHospitalToken, updateHospital)

authRouter.post('/patient/register', verifyHospitalToken, registerPatient);
authRouter.put('/patient/:patientId', verifyHospitalToken, updatePatientProfile);
authRouter.get('/patient/:patientId', verifyHospitalToken, getPatientProfile)
>>>>>>> 4f1817b67ac2af46b14e2e4176cf9ab7222d9f0c


export default authRouter;