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
    const oldestDate = new Date(1908, 5, 8); // Oldest verified living person
    const currentDate = new Date();
    const randomDate = new Date(oldestDate.getTime() + Math.random() * (currentDate.getTime() - oldestDate.getTime()));

    const randomDateFormatted = randomDate.toLocaleDateString('en-GB')

    return randomDateFormatted;
}