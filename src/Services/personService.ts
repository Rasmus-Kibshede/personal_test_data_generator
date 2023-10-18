import { PersonDTO } from "../Model/PersonDTO";
import { getAllPersonsFromFile } from "../Repositories/fileHandler";
import { Person } from "../Model/Person";

export const getRandomNameAndGender = async () => {

    const allPersons = await getAllPersonsFromFile();

    if (!allPersons) {
        throw new Error('No persons found');
    }


    Math.random();
    const randomNumber = Math.floor(Math.random() * allPersons.length);

    const randomPerson = allPersons[randomNumber] as PersonDTO;

    console.log(randomPerson.);
    

    // const person = new Person(02, 'rasmus kibshede', ):

    return allPersons[randomNumber];
};