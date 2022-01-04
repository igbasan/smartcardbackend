require('dotenv').config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { Request, Response } from 'express';

export const generateToken = async(payload: any) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '10h' });
    return token;
}

export const hashPassword = async(pwd:string) => {
    const hashed = await bcrypt.hash(pwd, 10);
    console.log(hashed)
    return hashed;
}

export const verifyPassword = async(pwd: string, dbpwd:string) => {
    const match = await bcrypt.compare(pwd, dbpwd);

    if (match){
        return true;
    }
    return false;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // if no bearer token is set
    if (!req.headers.authorization) {
      return res.status(401).json({ success: false, "message": "Unauthorized request" })
    }
    // extract the token
    const token = req.headers.authorization.split(' ')[1]
    // check if token is not empty
    if (token === 'null' || token === '') {
      return res.status(401).json({ success: false,  "message": "Token is required" })
    }
    // decode token with secret key
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ success: false, message: "token error" })
      }
      if (!decoded.hospitalId) {
        return res.status(401).json({ success: false, message: "token error" })
      }
      next()
    })
  }