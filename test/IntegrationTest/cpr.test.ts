import * as personService from '../../src/Services/personService';

describe('setRandomCpr', () => {
    let generatedCpr: string;
    
    const mockRandomDigits = jest.spyOn(personService, 'generateThreeRandomDigits').mockReturnValue('123');
    const mockDob = jest.spyOn(personService, 'setRandomBirthday').mockReturnValue('01/02/2002');
    jest.spyOn(personService, 'generateRandomCpr').mockReturnValue('0102221231').mockRestore;
    
    beforeAll(async () => {
        generatedCpr = await personService.setRandomCpr();
    });

    describe('Valid integration Test: setRandomCpr', () => {
        test('to generate a valid CPR number that has a length of 10', async () => {
            expect(generatedCpr.length).toEqual(10);
        });
        
        test('to see if the CPR number is a string', async () => {
            expect(typeof generatedCpr).toBe('string');
        });
        
        test('to see if the cpr string contains only digits', async () => {
            expect(generatedCpr).toMatch(/^[0-9]+$/);
        });
    });
});
