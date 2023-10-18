import { PersonDTO1, PersonDTO2 } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";
import { Person } from "../Model/Person";

export const getRandomNameAndGender = async () => {

    const allPersons = await getAllPersonsFromFile();

    if (!allPersons) {
        throw new Error('No persons found');
    }

    Math.random();
    const randomNumber = Math.floor(Math.random() * allPersons.length);

    const randomPerson = allPersons[randomNumber];

    const fullname = randomPerson.name + ' ' + randomPerson.surname;
    // const person = new Person(12345678, fullname, 'male', '18-10-2023', 'address', 87654321);

    const person: PersonDTO2 = {
        fullname: fullname,
        gender: randomPerson.gender
    }

    return person;
};