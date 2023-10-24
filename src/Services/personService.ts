import { log } from "console";
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

export const setRandomCpr = async (): Promise<string> => {
    const gender = (await getRandomNameAndGender()).gender;
    const birthday = await setRandomBirthday();
    const birthdayParts = birthday.split('/');

    const day = birthdayParts[0];
    const month = birthdayParts[1];
    const year = birthdayParts[2].substring(2, 4);

    const randomThreeDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const lastDigit = getRandomGenderDigit(gender);
    
    const cpr = `${day}${month}${year}${randomThreeDigits}${lastDigit}`;

    return cpr;
};

 const getRandomGenderDigit = (gender: string) => {'
    switch(gender){
        case 'female':
            return Math.floor(Math.random() * 5) * 2;
            break;
        case 'male':
            return Math.floor(Math.random() * 5) * 2 + 1;
            break;
        default:
            throw new Error('Invalid gender format');
    }
 }