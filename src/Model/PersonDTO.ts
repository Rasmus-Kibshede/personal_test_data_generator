// export type PersonDTO = PersonDTO1 | PersonDTO2;

export interface PersonResponseDTO {
    personId: number;
    cpr: number | null;
    fullName: string | null;
    gender: string | null;
}

export interface PersonDTO1 {
    name: string,
    surname: string,
    gender: string,
}
export interface PersonDTO2 {
    fullname: string,
    gender: string,
}

interface PersonRequestDTO {
    email: string;
    password: string;
}