// validators for incoming request

export const hospitalRegRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string|required|min:11",
    password: "string|max:8|min:5",
    hospital_reg: "string|required"
}

// hospital login rule
export const hospitalLogInRule = {
    email: "required|email",
    password: "string|max:8|min:5",
}

//hospital update rule
export const hospitalUpdateRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string|required|min:11",
}
export const patientRegRule = {
    firstName: "string|required",
    lastName: "string|required",
    otherName: "string",
    email: "required|email",
    phoneNumber: "string|required|min:11",
    genotype: "string",
    bloodGroup: "string",
    passport: "string",
    nationality: "string",
    state: "string",
    localGovernmentArea: "string",
    nin: "string",
    dateOfBirth: "string|date",
    patientId: "string|required"
}
export const patientUpdateRule = {
    firstName: "string",
    lastName: "string",
    otherName: "string",
    email: "email",
    phoneNumber: "string|min:11",
    genotype: "string",
    bloodGroup: "string",
    passport: "string",
    nationality: "string",
    state: "string",
    localGovernmentArea: "string",
    nin: "string",
    dateOfBirth: "string|date"
}

