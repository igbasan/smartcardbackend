export interface hospital {
    id: number,
    name: string;
    address: string;
    domain: string;
    email: string;
    phoneNumber: string;
    password: string;
    hospital_reg: string;
}


export type hospitalIn = Omit<hospital, "id" | "hospital_reg">
export type hospitalOut = Omit<hospital, "password">
export type hospitalLogIn = Pick<hospital, "email" | "password">
export type hospitalUpdate = Omit<hospital, "password" | "hospital_reg" | "id">

export interface patient {
    id: number,
    firstName: string,
    lastName: string,
    otherName: string,
    email: string,
<<<<<<< HEAD
    password: string,
=======
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71
    phoneNumber: string,
    genotype: string,
    bloodGroup: string,
    passport: string,
    nationality: string,
    state: string,
    localGovernmentArea: string,
    nin: string,
    dateOfBirth: string
}

export type patientIn = Omit<patient, "id">
<<<<<<< HEAD
export type patientOut = Omit<patient, "password">
export type patientLogIn = Pick<patient, "email" | "password">
=======
>>>>>>> e43603494d3ec183db769bd5c795c99f31f45e71


