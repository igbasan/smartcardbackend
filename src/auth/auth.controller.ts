import { Request, Response } from 'express';
import { getAHospital, registerAHospital } from './auth.service';
import { hospital, hospitalRegRule } from './auth.models';
import { checkValidity } from '../helper';
import { hashPassword } from './auth.helper';

export const registerHospital = async (req: Request, res: Response) => {
    let data: hospital = req.body

    try {
        const error = checkValidity(data, hospitalRegRule);

        if (error) {
            return res.status(400).json({
                success: false, message: error
            })
        }

        // hash user password
        data.password = await hashPassword(data.password);

        let result = await registerAHospital(req.body);
        result = result.get({plain: true}); // convert to js object
        delete result.password 
        return res.status(201).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }

}
export const loginHospital = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}
export const getHospitalDetail = async (req: Request, res: Response) => {
    try {
        let result = await getAHospital(req.params.regNo)
        result === null ? result = {} : result;
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}