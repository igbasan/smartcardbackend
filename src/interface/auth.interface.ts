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



