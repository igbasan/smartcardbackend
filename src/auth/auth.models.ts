export interface hospital {
    name: string;
    address: string;
    domain: string;
    email: string;
    phoneNumber: string;
    hospital_reg: string;
}



// validators for incoming request

export const hospitalRegRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string",
    hospital_reg: "string"
}