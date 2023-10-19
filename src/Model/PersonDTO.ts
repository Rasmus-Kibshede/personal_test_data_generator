export type PersonDTO = PersonResponseDTO | PersonRequestDTO | Person | PersonBDGenderFullname;

interface PersonResponseDTO {
  personId: number;
  cpr: number | null;
  dateOfBirth: string | null;
  fullName: string | null;
  gender: string | null;
}

interface Person {
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

interface PersonRequestDTO {
  email: string;
  password: string;
}
