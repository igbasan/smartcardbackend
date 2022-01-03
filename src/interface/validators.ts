// validators for incoming request

export const hospitalRegRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string|required|min:11",
    password: "string|max:8|min:5"
}

// hospital login rul
export const hospitalLoginRule = {
    email: "required|email",
    password: "string|max:8|min:5",
}