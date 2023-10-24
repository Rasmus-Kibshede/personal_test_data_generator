import 'dotenv/config';
import { generateRandomCpr, setRandomBirthday, setRandomGenderDigit } from '../../src/Services/personService';
import validator from 'validator';

describe('setRandomBirthday', () => {
    test('should generate a random date greater than or equal to a valid start date', async () => {
        const validStartDate = new Date(1908, 5, 8).getTime();
        const generatedDate = await setRandomBirthday();
        const dateParts = generatedDate.split('/');
        const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        expect(generatedDateObj.getTime()).toBeGreaterThanOrEqual(validStartDate);
    });

    test('should generate a random date less than or equal to the current date', async () => {
        const validEndDate = new Date().getTime();
        const generatedDate = await setRandomBirthday();

        const dateParts = generatedDate.split('/');
        const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        expect(generatedDateObj.getTime()).toBeLessThanOrEqual(validEndDate);
    });

    test('if the date format is correct', async () => {
        const generatedDate = await setRandomBirthday();
        expect(validator.isDate(generatedDate, {format: 'DD/MM/YYYY'})).toBe(true);
    });

    // TODO: Negative testies
});

/* ---------------------------------------- generateRandomCpr ---------------------------------------- */

describe('testing valid data in generateRandomCpr', () => {
    test('to generate a valid CPR number', () => {
        const dob = "08/06/1998";
        const threeRandomDigits = "123";
        const lastDigit = "1";

        const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

        expect(typeof result).toBe("string");
        expect(result).toMatch(/^\d{10}$/);
    });

    test('to generate a CPR with correct date', () => {
        const dob = "08/06/1998";
        const threeRandomDigits = "123";
        const lastDigit = "1";

        const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

        const dayPart = result.substring(0, 2);
        const monthPart = result.substring(2, 4);
        const yearPart = result.substring(4, 6);

        expect(dayPart).toBe("08");
        expect(monthPart).toBe("06");
        expect(yearPart).toBe("98");
    });

    test('to generate a CPR with correct last four digits', () => {
        const dob = "08/06/1998";
        const threeRandomDigits = "123";
        const lastDigit = "1";

        const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

        const lastFourDigits = result.substring(6, 10);

        expect(lastFourDigits).toBe("1231");
    });
});

describe('testing invalid data in generateRandomCpr', () => {
    test('to throw error for invalid date format', () => {
        const dob = "invalid-date";
        const threeRandomDigits = "123";
        const lastDigit = "1";

        expect(() => generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError("Invalid date format");
    });

    test('to throw error for invalid three random digits', () => {
        const dob = "08/06/1998";
        const threeRandomDigits = "invalid-three-random-digits";
        const lastDigit = "1";

        expect(() => generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError("Invalid three random digits");
    });

    test('to throw error for invalid last digit', () => {
        const dob = "08/06/1998";
        const threeRandomDigits = "123";
        const lastDigit = "invalid-last-digit";

        expect(() => generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError("Invalid last digit");
    });
});

/* ---------------------------------------- getRandomGenderDigit ---------------------------------------- */

describe('testing valid data in getRandomGenderDigit', () => {
        const genderData = [
            { 'gender': 'male', "expected": 1},
            { 'gender': 'female', "expected": 2 },
            { 'gender': 'mAle', "expected": 1},
            { 'gender': 'fEmAlE', "expected": 2},
        ]
        test.each(genderData)('Gender validation on parameter passes', ({ gender, expected }) => {
            expect(setRandomGenderDigit(gender) % 2 === 0).toBe(expected % 2 === 0);
        });
    });
    
describe('testing invalid data in getRandomGenderDigit', () => {
    const invalidError = new Error("Invalid gender format");
        const genderData = [
            { 'gender': 'fem', "expected": invalidError },
            { 'gender': ' ', "expected": invalidError },
            { 'gender': '', "expected": invalidError },
            { 'gender': '!.-', "expected": invalidError },
        ]
        test.each(genderData)('Gender validation on parameter passes', ({ gender, expected }) => {
            expect(() => setRandomGenderDigit(gender)).toThrowError(expected);
        });
    });
