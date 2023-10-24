import { PersonDTO1, PersonDTO2 } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";

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

  return person;
};