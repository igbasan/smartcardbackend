import express from 'express';
import { getHospitalDetail, loginHospital, registerHospital, updateHospital} from '../controllers/auth.controller';
import { verifyHospitalToken } from '../helpers/auth.helper';

const authRouter = express.Router();


authRouter.post('/register', registerHospital)
authRouter.post('/login', loginHospital)


authRouter.get('/', verifyHospitalToken,getHospitalDetail)

authRouter.put('/', verifyHospitalToken, updateHospital)



export default authRouter;