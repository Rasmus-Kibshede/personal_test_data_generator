export type PersonDTO = PersonResponseDTO | PersonRequestDTO | Person;

interface PersonResponseDTO {
  personId: number;
  cpr: number | null;
  fullName: string | null;
  gender: string | null;
  dateOfBirth: string | null;
}

interface Person {
  name: string;
  surname: string;
  gender: string;
  dateOfBirth: string;
}

interface PersonRequestDTO {
  email: string;
  password: string;
}
