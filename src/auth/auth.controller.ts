import { Request, Response } from 'express';
import { registerAHospital } from './auth.service';

export const registerHospital = async (req: Request, res: Response) => {
    try {
        const result = await registerAHospital(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json(error)
    }

}
export const loginHospital = async (req: Request, res: Response) => {

}
export const getHospitalDetail = async (req: Request, res: Response) => {

}