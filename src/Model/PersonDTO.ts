export type PersonDTO = PersonResponseDTO | PersonRequestDTO;

interface PersonResponseDTO {
    personId: number;
    cpr: number | null;
    fullName: string | null;
    gender: string | null;
}

interface PersonRequestDTO {
	email: string;
	password: string;
}