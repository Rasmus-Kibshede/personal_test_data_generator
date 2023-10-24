// export type PersonDTO = PersonDTO1 | PersonDTO2;

export interface PersonResponseDTO {
  personId: number;
  cpr: number | null;
  dateOfBirth: string | null;
  fullName: string | null;
  gender: string | null;
}

export interface PersonDTOFileObject {
    name: string,
    surname: string,
    gender: string,
}
export interface PersonDTO {
    fullname: string,
    gender: string,
}

export interface PersonRequestDTO {
  email: string;
  password: string;
}
