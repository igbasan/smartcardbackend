import { Request, Response } from 'express';
import { getAHospital, registerAHospital } from './auth.service';
import { hospitalRegRule } from './auth.models';
import { checkValidity } from '../helper';

export const registerHospital = async (req: Request, res: Response) => {
    const error = checkValidity(req.body, hospitalRegRule);

    if(error) {
        return res.status(400).json({
            success:false, message:error
        })
    }
    
    try {
        const result = await registerAHospital(req.body);
        return res.status(201).json({success: true, data: result});
    } catch (error) {
        return res.status(500).json({success: false, message: error})
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
        return res.status(200).json({ success: true, data:result})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}