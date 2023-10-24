import { PersonDTO1, PersonDTO2 } from "../Model/PersonDTO";
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

  const person: PersonDTO2 = {
    fullname: fullname,
    gender: randomPerson.gender
  };

  return validateNameAndGender(person);
};

export const validateNameAndGender = (person: PersonDTO2) => {
  console.log(person);

  if (validateGender(person.gender) && validateName(person.fullname)) {
    return person;
  } else {
    console.log('error');
    throw new Error('Validation failed');
  }
};

export const validateName = (name: string) => {
  const nameFormat = /^[a-æA-Æ\sa.c]*$/;
  return name.match(nameFormat);
};

export const validateGender = (gender: string) => {
  return (validator.equals(gender, 'male') || validator.equals(gender, 'female'));
};