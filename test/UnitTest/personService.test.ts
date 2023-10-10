import * as personService from '../../src/Services/personService';

interface Person {
    personId: number;
    fullName: string;
    gender: string;
}

describe('first test ever made in the world.', async () => {
    //arrange
    const testData = [{ personId: 1, Person: { fullName: 'Jens Jensen', gender: true } }]
    //act
    test.each(testData)('test correct name', async ({ personId, Person }) => {
        const response = await personService.getNameGender(personId) as Person;
        const fullName = response.fullName;
       it('test test', () => {
        expect(fullName).toBe(Person.fullName);
       });
    });
    //Assert
});

