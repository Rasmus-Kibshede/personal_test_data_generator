export type PersonDTO = PersonResponseDTO | PersonRequestDTO | PersonDTO2;

interface PersonResponseDTO {
    personId: number;
    cpr: number | null;
    fullName: string | null;
    gender: string | null;
}

interface PersonDTO2 {
    name: string,
    surname: string,
    gender: string,
}

interface PersonRequestDTO {
    email: string;
    password: string;
}