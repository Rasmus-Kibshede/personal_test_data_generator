export type PersonDTO = PersonResponseDTO | PersonRequestDTO | Person;

interface PersonResponseDTO {
  personId: number;
  cpr: number | null;
  fullName: string | null;
  gender: string | null;
  dateOfBirth: Date | null;
}

interface Person {
  name: string;
  surname: string;
  gender: string;
  dateOfBirth: Date;
}

interface PersonRequestDTO {
  email: string;
  password: string;
}
