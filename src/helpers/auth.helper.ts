require('dotenv').config();
const Validator = require('validatorjs');

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { userInfoInRequest } from '../types/express';

export const generateToken = async (payload: any) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '10h' });
  console.log(process.env.SECRET_KEY)
  return token;
}

export const hashPassword = async (pwd: string) => {
  const hashed = await bcrypt.hash(pwd, 10);
  console.log(hashed)
  return hashed;
}

export const verifyPassword = async (pwd: string, dbpwd: string) => {
  const match = await bcrypt.compare(pwd, dbpwd);

  if (match) {
    return true;
  }
  return false;
}

export const checkValidity = (data, rule) => {
  // ensure all required fields are sent without unwanted fields
  try {
    const required = Object.keys(rule);
    const incoming = Object.keys(data);
    validateFields(required, incoming)
  } catch (error: any) {
    return error.message
  }

  // ensure fields are validated
  let validation = new Validator(data, rule);
  if (validation.fails()) {
    // get all the fields name with errors
    const errorFieldList = Object.keys(validation.errors.errors)
    // select the first error of the first field
    const err = validation.errors.errors[errorFieldList[0]][0]
    return err
  } else {
    // return empty array if no error
    return ''
  }
}

export const verifyToken = (req: userInfoInRequest, res: Response, next: NextFunction) => {
  // if no bearer token is set
  if (!req.headers.authorization) {
    return res.status(401).json({ success: false, "message": "Unauthorized request" })
  }
  // extract the token
  const token = req.headers.authorization.split(' ')[1]
  // check if token is not empty
  if (token === 'null' || token === '') {
    return res.status(401).json({ success: false, "message": "Token is required" })
  }
  // decode token with secret key
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: "token error" })
    }
    if (!decoded.hospitalId) {
      return res.status(401).json({ success: false, message: "token error" })
    }
    req.hospitalId = decoded.hospitalId;
    next()
  })
}

export const validateFields = (requiredFields: string[], incomingData: string[]) => {
  // this function ensures that only required fields are recieved from incoming data
  for(let field of incomingData) {
    if (!requiredFields.includes(field)   ) {
      throw new Error(`unexpected field ${field} in request`);
    }
  }
}