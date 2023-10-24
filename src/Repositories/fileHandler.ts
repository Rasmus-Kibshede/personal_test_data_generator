import fs from 'fs';
import { PersonDTOFileObject } from '../Model/PersonDTO';

const personNamePath = './documents/person-names.json';


export const getAllPersonsFromFile = async () => {
    try {
        let fileContent = fs.readFileSync(personNamePath, 'utf16le');

        // Remove any leading Byte Order Mark (BOM), only ussed in UFT-16 and UFT-32 file encoding
        if (fileContent.charCodeAt(0) === 0xfeff) {
            fileContent = fileContent.slice(1);
        }

        const data: PersonDTOFileObject[] = JSON.parse(fileContent)[0].persons;
        return data;
    } catch (error) {
        console.log('filehandler error', error);
    }
};
