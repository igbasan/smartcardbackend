// validators for incoming request

export const hospitalRegRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string|required|min:11",
    password: "string|max:8|min:5"
}

// hospital login rule
export const hospitalLogInRule = {
    email: "required|email",
    password: "string|max:8|min:5",
}

export const patientRegRule = {
    firstName: "string|required",
    lastName: "string|required",
    otherName: "string",
    email: "required|email",
<<<<<<< HEAD
    password: "string|max:8|min:5",
=======
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71
    phoneNumber: "string|required|min:11",
    genotype: "string",
    bloodGroup: "string",
    passport: "string",
    nationality: "string",
    state: "string",
    localGovernmentArea: "string",
    nin: "string",
<<<<<<< HEAD
    dateOfBirth: "string"
}

export const patientLoginRule = {
    email: "required|email",
    password: "string|max:8|min:5",
=======
    dateOfBirth: "string|date"
}

//hospital update rule
export const hospitalUpdateRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string|required|min:11",
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71
}