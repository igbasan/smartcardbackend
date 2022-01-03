import { Request, Response } from 'express';
import { getAHospital, registerAHospital } from '../services/auth.service';
import { hospital, hospitalOut } from '../interface/auth.interface';
import { checkValidity } from '../helper';
import { hashPassword } from '../helpers/auth.helper';
import { hospitalRegRule } from '../interface/validators';

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

        let result: hospitalOut = await registerAHospital(req.body);
        return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message })
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
        return res.status(500).json({ success: false, message: 'Error occurred when fetching data!' })
    }
}