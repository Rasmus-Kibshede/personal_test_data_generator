import { PersonDTOFileObject, PersonDTO } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";
import validator from 'validator';

export const getRandomNameAndGender = async () => {

  const allPersons = await getAllPersonsFromFile();

  if (!allPersons) {
    throw new Error('No persons found');
  }

  const randomNumber = Math.floor(Math.random() * allPersons.length);

  const randomPerson = allPersons[randomNumber];

  const fullname = randomPerson.name + ' ' + randomPerson.surname;

  const person: PersonDTO = {
    fullname: fullname,
    gender: randomPerson.gender
  };

  return validateNameAndGender(person);
};

export const validateNameAndGender = (person: PersonDTO) => {
  if (validateGender(person.gender) && validateName(person.fullname)) {
    return person;
  } else {
    throw new Error('Validation failed');
  }
};

export const validateName = (name: string) => {
  const nameFormat = /^(?=\S)(?!.*\d)[a-øA-Ø\sa.c]+\s[a-øA-Ø\sa.c]+$/;
  return validator.matches(name, nameFormat);
};

export const validateGender = (gender: string) => {
  return (validator.equals(gender, 'male') || validator.equals(gender, 'female'));
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

  return phoneNumberPrefixes[Math.floor(Math.random() * phoneNumberPrefixes.length)];
}

export const generateRandomDigits = async (length: number) =>  {
  return Array.from({ length: 8 - length }, () => Math.floor(Math.random() * 10)).join('');
};

export const generateRandomPhoneNum = async () => {
    const prefix = await randomNumberPrefix();
    return (prefix + ' ' + generateRandomDigits(prefix.length)) as string;
};
