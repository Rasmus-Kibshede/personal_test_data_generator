import { Person } from '../../src/Model/Person';
import * as personService from '../../src/Services/personService';

//interface Person {
  //  personId: number;
  //  fullName: string;
  //  gender: string;
//}

describe('first test ever made in the world.', () => {
    //arrange
    console.log('In the test before person creation');
    
    const person: Person = {
        personId: 1,
    cpr: 12345678,
    fullName: "Jeff Roed",
    gender: null,
    dateOfBirth: null,
    address: null,
    phoneNumber: null
    };


    console.log(person);
    
    test('Testing FullName', () => {
        expect(person).toContain(person); //Sammenligner bare med sig selv lige nu. 
        expect(personService.getNameGender(person.personId)).toContain(person);
      });

    //const testData = [{ personId: 1, fullName: 'Jens Jensen', gender: true }]
    //console.log(testData);
    
    //act
    /*test.each(person)('test correct name', async (person) => {
        const response = await personService.getNameGender(person.personId) as Person;
        console.log(response);
        console.log(person);
        
        
        expect(response).toBe(person);
    })*/
    //Assert
});

