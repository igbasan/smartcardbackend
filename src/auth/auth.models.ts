export interface hospital {
    name: string;
    address: string;
    domain: string;
    email: string;
    phoneNumber: string;
    password: string;
}



// validators for incoming request

export const hospitalRegRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string",
    password: "string|max:8|min:5"
}

// hospital login rul
export const hospitalLoginRule = {
    email: "required|email",
    password: "string|max:8|min:5",
}