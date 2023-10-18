import fs from 'fs';
import { PersonDTO } from '../Model/PersonDTO';

export const getRandomNameAndGender = async () => {

    const allPersons = await getAllPersonsFromFile();

    Math.random();

    const randomNumber = Math.floor(Math.random() * allPersons.length);

    return allPersons[randomNumber];
};

const getAllPersonsFromFile = async () => {
    let fileContent = fs.readFileSync('./documents/person-names.json', 'utf16le');

    // Remove any leading Byte Order Mark (BOM), only ussed in UFT-16 and UFT-32
    if (fileContent.charCodeAt(0) === 0xfeff) {
        fileContent = fileContent.slice(1);
    }

    const data: PersonDTO[] = JSON.parse(fileContent)[0].persons;
    return data;
};