import { Person } from '../../src/Model/Person';
import * as personService from '../../src/Services/personService';

describe('first test ever made in the world.', () => {
    //arrange
    const testData = [{ personId: 1, fullName: 'Jens Jensen', gender: true }]
    //act
    test.each(testData)('test correct name', async ({ personId, fullName, gender }) => {
        const response = await personService.getNameGender(personId) as Person;
        console.log(response);
        console.log(fullName);
        
        
        expect(response.fullName).toBe(fullName);
    })
    //Assert
})

