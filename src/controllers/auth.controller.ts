import { Request, Response } from 'express';
import { registerAHospital, registerAPatient } from '../services/auth.service';
import { hospitalIn, hospitalLogIn, hospitalOut, hospitalUpdate, patientIn } from '../interface/auth.interface';
import { checkValidity, generateToken, hashPassword, verifyPassword } from '../helpers/auth.helper';
import { hospitalLogInRule, hospitalRegRule, hospitalUpdateRule, patientRegRule } from '../validators/validators';
import { getAHospitalByEmail, getAHospital, updateHospitalProfile } from '../services/hospital.service';
import { userInfoInRequest } from '../types/express';

export const registerHospital = async (req: Request, res: Response) => {
    let data: hospitalIn = req.body

    try {
        const error = checkValidity(data, hospitalRegRule);

        if (error) {
            return res.status(400).json({
                success: false, message: error
            })
        }

        // hash user password
        data.password = await hashPassword(data.password);

        let result: hospitalOut = await registerAHospital(req.body);
        return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message })
    }

}
export const loginHospital = async (req: Request, res: Response) => {
    try {
        let data: hospitalLogIn = req.body;
        const error = checkValidity(data, hospitalLogInRule)
        if (error) {
            return res.status(400).json({
                success: false, message: error
            })
        }

        let foundHospital = await getAHospitalByEmail(data.email);
        if (!foundHospital) {
            return res.status(403).json({ success: false, message: 'email or password not valid' })
        }

        // check that password is correct
        const pwdIsCorrect = await verifyPassword(data.password, foundHospital.password)
        if (!pwdIsCorrect) {
            return res.status(403).json({ success: false, message: 'email or password not valid' })
        }
        // remove password from data to be sent
        foundHospital = foundHospital.dataValues;
        delete foundHospital.password;

        // generate token for user
        const userToken: string = await generateToken({ hospitalId: foundHospital.id, email: foundHospital.email })

        return res.status(200).json({ success: true, data: foundHospital, token: userToken })
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message })
    }
}

export const getHospitalDetail = async (req: userInfoInRequest, res: Response) => {
    try {
        let result: hospitalOut | {} = await getAHospital(req.hospitalId)
        result === null ? result = {} : result;
        return res.status(200).json({ success: true, data: result })
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message  })
    }
}

export const updateHospital = async (req: userInfoInRequest, res: Response) => {
    let data: hospitalUpdate = req.body

    try {
        const error = checkValidity(data, hospitalUpdateRule);

        if (error) {
            return res.status(400).json({
                success: false, message: error
            })
        }
        const result: boolean = await updateHospitalProfile(req.hospitalId, data);
        if (result) {
            return res.status(200).json({ success: true, message: 'update successful' })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error occurred when fetching data!' })
    }
}


export const resetPassword = async(req: Request, res: Response) => {
    
}
