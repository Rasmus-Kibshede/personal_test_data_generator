import { PersonDTO1, PersonDTO2 } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";

export const getRandomNameAndGender = async () => {

  const allPersons = await getAllPersonsFromFile();

  if (!allPersons) {
    throw new Error('No persons found');
  }

  Math.random();
  const randomNumber = Math.floor(Math.random() * allPersons.length);

    return allPersons[randomNumber];
};

export const setRandomBirthday = async () => {
    const start = new Date(1908, 5, 8); // Oldest verified living person
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const randomDateFormatted = randomDate.toLocaleDateString('en-GB')

    return randomDateFormatted;
}