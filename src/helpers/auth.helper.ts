import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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