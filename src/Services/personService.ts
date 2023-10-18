import { getAllPersonsFromFile } from "../Repositories/fileHandler";

export const getRandomNameAndGender = async () => {

    const allPersons = await getAllPersonsFromFile();

    if (!allPersons) {
        throw new Error('No persons found');
    }


    Math.random();
    const randomNumber = Math.floor(Math.random() * allPersons.length);

    const randomPerson: PersonDTO = allPersons[randomNumber];

    return allPersons[randomNumber];
};