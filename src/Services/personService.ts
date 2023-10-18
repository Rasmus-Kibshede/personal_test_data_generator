import { PersonDTO } from "../Model/PersonDTO";
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

export const setRandomBirthday = () => {
    const start = new Date(1900, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const day = randomDate.getDate().toString().padStart(2, '0');
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const year = randomDate.getFullYear().toString().substr(-2);

    const data: PersonDTO = {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: `${day}${month}${year}`
    }

    return data;
}