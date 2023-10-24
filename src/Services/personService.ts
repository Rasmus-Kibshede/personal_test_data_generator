import { PersonDTO1, PersonDTO2 } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";
import validator from 'validator';

export const getRandomNameAndGender = async () => {

  const allPersons = await getAllPersonsFromFile();

  if (!allPersons) {
    throw new Error('No persons found');
  }



  Math.random();
  const randomNumber = Math.floor(Math.random() * allPersons.length);

  const randomPerson = allPersons[randomNumber];

  const fullname = randomPerson.name + ' ' + randomPerson.surname;

  const person: PersonDTO2 = {
    fullname: fullname,
    gender: randomPerson.gender
  }

  // await validateNameAndGender(person);

  return person;
};

const validateNameAndGender = (person: PersonDTO2) => {
  const gender = person.gender.toLowerCase();
  if (!validator.equals(gender, 'male') || !validator.equals(gender, 'female')) {
    throw new Error('Gender format invalid');
  }

  return true;
};