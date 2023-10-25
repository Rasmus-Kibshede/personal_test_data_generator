import { Person } from "../Model/Person";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";
import validator from "validator";
import { el, faker } from '@faker-js/faker';
import { setRandomAddress } from "./addressService";


export const getPerson = async () => {
  const person = await getRandomNameAndGender();
  const birthday = await setRandomBirthday();

  person.dateOfBirth = birthday;
  person.cpr = generateCPR(person.gender, birthday);
  person.phoneNumber = (await generateRandomPhoneNum()).replace(/\s/g, '');
  person.address = await setRandomAddress();
  // console.log(person);
  

  return person;
}

export const getPersons = async () => {
  const persons: Person[] = [];
  const randomNumber = faker.number.int({ min: 2, max: 100 });

  for (let i = 0; i < randomNumber; i++) {
    const person = await getPerson();

    if (!persons.some(p => p.cpr === person.cpr || p.phoneNumber === person.phoneNumber)) {
      persons.push(person);
    } else {
      i--;
    }
  }
  return persons;
};

export const getRandomNameAndGender = async () => {
  const allPersons = await getAllPersonsFromFile();

  if (!allPersons) {
    throw new Error("No persons found");
  }

  const randomNumber = faker.number.int({ min: 1, max: allPersons.length - 1 });
  const randomPerson = allPersons[randomNumber];
  const fullname = randomPerson.name + " " + randomPerson.surname;
  const person = new Person(fullname, randomPerson.gender);

  return validateNameAndGender(person);
};

export const validateNameAndGender = (person: Person) => {
  if (validateGender(person.gender) && validateName(person.fullname)) {
    return person;
  } else {
    console.log("Validation failed", person);
    throw new Error("Validation failed");
  }
};

export const validateName = (name: string) => {
  const nameFormat = /^(?=\S)(?!.*\d)[a-øA-Ø\sa.c-]+\s[a-øA-Ø\sa.c-]+$/;
  return validator.matches(name, nameFormat);
};

export const validateGender = (gender: string) => {
  return validator.equals(gender, "male") || validator.equals(gender, "female");
};

export const setRandomBirthday = async () => {
  const start = new Date(1908, 5, 8); // Oldest verified living person
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const randomDateFormatted = randomDate.toLocaleDateString("en-GB");

  return randomDateFormatted;
};

export const getNameGenderDob = async () => {
  const person = await getRandomNameAndGender();
  const birthday = await setRandomBirthday();
  person.dateOfBirth = birthday;

  return person;
};


export const generateCPR = (gender: string, dob: string) => {
  const randomThreeDigits = generateThreeRandomDigits();
  const lastDigit = setRandomGenderDigit(gender).toString();

  return generateRandomCpr(dob, randomThreeDigits, lastDigit);
}

// TODO: Unit tests
export const generateThreeRandomDigits = () => {
  return faker.number.int({ min: 0, max: 9 }).toString();
};

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

export const randomNumberPrefix = async () => {
  const phoneNumberPrefixes = [
    '2', '30', '31', '40', '41', '42', '50', '51', '52', '53',
    '60', '61', '71', '81', '91', '92', '93', '342', '344', '345',
    '346', '347', '348', '349', '356', '357', '359', '362', '365',
    '366', '389', '398', '431', '441', '462', '466', '468', '472',
    '474', '476', '478', '485', '486', '488', '489', '493', '494',
    '495', '496', '498', '499', '542', '543', '545', '551', '552',
    '556', '571', '572', '573', '574', '577', '579', '584', '586',
    '587', '589', '597', '598', '627', '629', '641', '649', '658',
    '662', '663', '664', '665', '667', '692', '693', '694', '697',
    '771', '772', '782', '783', '785', '786', '788', '789', '826',
    '827', '829',
  ];

  return phoneNumberPrefixes[
    faker.number.int({ min: 0, max: phoneNumberPrefixes.length - 1 })
  ];
};

export const generateRandomDigits = async (prefixLength: number) => {
  return faker.string.numeric({ length: 8 - prefixLength });
};

export const generateRandomPhoneNum = async () => {
  const prefix = await randomNumberPrefix();
  const generateDigits = await generateRandomDigits(prefix.length);

  return (prefix + ' ' + generateDigits) as string;
};