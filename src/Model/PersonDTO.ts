// export type PersonDTO = PersonDTO1 | PersonDTO2;

export interface PersonResponseDTO {
  personId: number;
  cpr: number | null;
  dateOfBirth: string | null;
  fullName: string | null;
  gender: string | null;
}

export interface PersonDTO1 {
  name: string;
  surname: string;
  gender: string;
  dateOfBirth: string;
}

// interface PersonBDGenderFullname {
//   fullname: string;
//   name: string;
//   surname: string;
//   gender: string;
//   dateOfBirth: string;
// }
export interface PersonDTO2 {
    fullname: string,
    gender: string,
}

export interface PersonRequestDTO {
  email: string;
  password: string;
}
