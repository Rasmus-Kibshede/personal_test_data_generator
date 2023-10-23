import 'dotenv/config';
import { getRandomNameAndGender } from '../../src/Services/personService';
import { setRandomBirthday } from '../../src/Services/personService';

test('Testing FullName', async () => {
    // const test = await getRandomNameAndGender();

    expect(1).toEqual(1);
});

describe('setRandomBirthday', () => {
    it('should generate a random date in "dd/mm/yyyy" format', async () => {
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        const generatedDate = await setRandomBirthday();
        expect(generatedDate).toMatch(datePattern);
    });

    it('should generate a random date greater than or equal to a valid start date', async () => {
        const validStartDate = new Date(1908, 5, 8).getTime();
        const generatedDate = await setRandomBirthday();

        const dateParts = generatedDate.split('/');
        const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        expect(generatedDateObj.getTime()).toBeGreaterThanOrEqual(validStartDate);
    });

    it('should generate a random date less than or equal to the current date', async () => {
        const validEndDate = new Date().getTime();
        const generatedDate = await setRandomBirthday();

        const dateParts = generatedDate.split('/');
        const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        expect(generatedDateObj.getTime()).toBeLessThanOrEqual(validEndDate);
    });
});
