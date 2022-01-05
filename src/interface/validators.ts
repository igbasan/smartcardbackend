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

//hospital update rule
export const hospitalUpdateRule = {
    name: "string|required",
    address: "string|required",
    domain: "url",
    email: "required|email",
    phoneNumber: "string|required|min:11",
}