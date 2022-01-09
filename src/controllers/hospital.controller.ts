import { checkValidity } from "../helpers/auth.helper";
import { patientIn } from "../interface/auth.interface";
import { patientRegRule, patientUpdateRule } from "../interface/validators";
import { registerAPatient } from "../services/auth.service";
import { userInfoInRequest } from "../types/express";

import { Request, Response } from 'express';
import { getAPatient, updatePatient } from "../services/hospital.service";

export const registerPatient = async (req: userInfoInRequest, res: Response) => {
    let data: patientIn = req.body;

    try {
        const error = checkValidity(data, patientRegRule);
        if(error) {
            return res.status(400).json({
                success: false, message: error
            })
        }
        // hospital id are automatically attached to request obj
        const hospitalId = req.hospitalId;
        let result = await registerAPatient(hospitalId, req.body)
        return res.status(201).json({ success: true, data: result });

    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message });
    }
};

export const getPatientProfile = async (req: userInfoInRequest, res: Response) => {
    try {
        let result = await getAPatient(req.params.patientId);
       result === null ? result = {} : result;
       return res.status(200).json({ success: true, data: result })
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message  })
    }
}


export const updatePatientProfile = async (req: userInfoInRequest, res: Response) => {
    try {
        let data = req.body;

        const error = checkValidity(data, patientUpdateRule);
        if(error) {
            return res.status(400).json({
                success: false, message: error
            })
        }
        const patientId = req.params.patientId;
        const result = await updatePatient(patientId, data);
        if (result) {
            return res.status(200).json({ success: true, message: 'update successful' })
        }

    } catch (error: any) {
        return res.status(412).json({success: false, message: error.message});
    }
}