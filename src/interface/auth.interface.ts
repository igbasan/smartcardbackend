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
export type patientLogIn = Pick<patient, "email">


