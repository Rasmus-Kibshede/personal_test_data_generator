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
    const end = new Date(2020, 0, 1);
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const data: PersonDTO = {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: randomDate
    }

    return data;
}