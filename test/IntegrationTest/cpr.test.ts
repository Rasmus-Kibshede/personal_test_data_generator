import * as personService from '../../src/Services/personService';

describe('setRandomCpr', () => {
    let generatedCpr: string;

    jest.spyOn(personService, 'generateRandomCpr').mockReturnValue('010222-1231').mockRestore;

    beforeAll(async () => {
        generatedCpr = personService.generateCPR('male', '01/02/2002');
    });

    describe('Valid integration Test: setRandomCpr', () => {
        test('to generate a valid CPR number that has a length of 11 including -', async () => {
            expect(generatedCpr.length).toEqual(11);
        });

        test('to see if the CPR number is a string', async () => {
            expect(typeof generatedCpr).toBe('string');
        });

        test('to see if the cpr string contains only digits and - ', async () => {
            expect(generatedCpr).toMatch(/^\d{1,10}-+?\d{0,9}$/);
        });
    });
});
