import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const generateToken = async(payload: any) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'RS256'});
    return token;
}

export const hashPassword = async(pwd) => {
    const hashed = await bcrypt.hash(pwd, 10);
    console.log(hashed)
    return hashed;
}

export const verifyPassword = async(pwd, dbpwd) => {
    const match = await bcrypt.compare(pwd, dbpwd);

    if (match){
        return true;
    }
    return false;
}