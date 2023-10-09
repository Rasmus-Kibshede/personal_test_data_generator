import * as personService from '../../src/Services/personService';

describe('first test ever made in the world.', () => {
    //arrange
    const testData = [{ personId: 1, Person: { fullName: 'Jens Jensen', gender: true } }]
    //act
    test.each(testData)('test correct name', ({ personId, Person }) => {
        expect(personService.getNameGender(personId)).toBe(Person)
    })
    //Assert
})

