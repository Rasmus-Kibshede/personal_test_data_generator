import { PersonDTO } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";
import validator from "validator";

export const getRandomNameAndGender = async () => {
  const allPersons = await getAllPersonsFromFile();

  if (!allPersons) {
    throw new Error("No persons found");
  }

  const randomNumber = Math.floor(Math.random() * allPersons.length);

  const randomPerson = allPersons[randomNumber];

  const fullname = randomPerson.name + " " + randomPerson.surname;

  const person: PersonDTO = {
    fullname: fullname,
    gender: randomPerson.gender,
  };

  return validateNameAndGender(person);
};

export const validateNameAndGender = (person: PersonDTO) => {
  if (validateGender(person.gender) && validateName(person.fullname)) {
    return person;
  } else {
    throw new Error("Validation failed");
  }
};

export const validateName = (name: string) => {
  const nameFormat = /^(?=\S)(?!.*\d)[a-øA-Ø\sa.c]+\s[a-øA-Ø\sa.c]+$/;
  return validator.matches(name, nameFormat);
};

export const validateGender = (gender: string) => {
  return validator.equals(gender, "male") || validator.equals(gender, "female");
};

export const setRandomBirthday = async () => {
  const start = new Date(1908, 5, 8); // Oldest verified living person
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const randomDateFormatted = randomDate.toLocaleDateString("en-GB");

  return randomDateFormatted;
};

export const setRandomCpr = async () => {
  const gender = (await getRandomNameAndGender()).gender;
  const birthday = await setRandomBirthday();

  const randomThreeDigits = generateThreeRandomDigits();
  const lastDigit = setRandomGenderDigit(gender).toString();

  return generateRandomCpr(birthday, randomThreeDigits, lastDigit);
};

// TODO: Unit tests
export const generateThreeRandomDigits = () => {
  return Math.floor(Math.random() * 1000).toString().padStart(3, "0");
};

// TODO: Unit tests
export const generateRandomCpr = (
  dob: string,
  threeRandomDigits: string,
  lastDigit: string
) => {

  if (!validator.isDate(dob, { format: "DD/MM/YYYY" })) {
    throw new Error("Invalid date format");
  }

  if (!validator.isNumeric(threeRandomDigits)) {
    throw new Error("Invalid three random digits");
  }

  if (!validator.isNumeric(lastDigit)) {
    throw new Error("Invalid last digit");
  }

  const birthdayParts = dob.split("/");

  const day = birthdayParts[0];
  const month = birthdayParts[1];
  const year = birthdayParts[2].substring(2, 4);

  return `${day}${month}${year}${threeRandomDigits}${lastDigit}`;
};

// Unit
export const setRandomGenderDigit = (gender: string) => {
  switch (gender.toLowerCase()) {
    case "female":
      return Math.floor(Math.random() * 5) * 2;
    case "male":
      return Math.floor(Math.random() * 5) * 2 + 1;
    default:
      throw new Error("Invalid gender format");
  }
};
