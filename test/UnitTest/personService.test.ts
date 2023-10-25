import 'dotenv/config';
import {
  setRandomBirthday,
  randomNumberPrefix,
  generateRandomDigits,
  generateRandomCpr,
  setRandomGenderDigit,
} from "../../src/Services/personService";
import validator from "validator";
import { faker } from "@faker-js/faker";

let prefix: string;
let randomDigits: string;
const prefixes = [
  { number: '2', expected: 7 },
  { number: '30', expected: 6 },
  { number: '342', expected: 5 },
];

beforeAll(async () => {
  prefix = await randomNumberPrefix();
  randomDigits = await generateRandomDigits(prefix.length);
});

describe('Testing prefix', () => {
  describe('Testing valid prefix', () => {
    test('should be bigger than 0', () => {
      expect(prefix.length).toBeGreaterThan(0);
    });

    test('Should be less than 9', () => {
      expect(prefix.length).toBeLessThanOrEqual(3);
    });

    test('Should be a number', () => {
      expect(validator.isNumeric(prefix)).toBe(true);
    });
  });
});

describe('Testing generateDigtits', () => {
  describe('Testing length of randomDigits', () => {
    test.each(prefixes)('Testing length', async ({ number, expected }) => {
      let randomDigits = await generateRandomDigits(number.length);
      expect(randomDigits.length).toBe(expected);
    });
  });
});

/* ---------------------------------------- setRandomBirthday ---------------------------------------- */

describe('setRandomBirthday', () => {
  describe('Valid data in setRandomBirthday', () => {
    test('Generate a random date greater than or equal to a valid start date', async () => {
      const validStartDate = new Date(1908, 5, 8).getTime();
      const generatedDate = setRandomBirthday();
      const dateParts = generatedDate.split('/');
      const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

      expect(generatedDateObj.getTime()).toBeGreaterThanOrEqual(validStartDate);
    });

    test('Generate a random date less than or equal to the current date', () => {
      const validEndDate = new Date().getTime();
      const generatedDate = setRandomBirthday();

      const dateParts = generatedDate.split("/");
      const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
      expect(generatedDateObj.getTime()).toBeLessThanOrEqual(validEndDate);
    });

    test('Date format is valid', () => {
      const generatedDate = setRandomBirthday();
      expect(validator.isDate(generatedDate, { format: 'DD/MM/YYYY' })).toBe(true);
    });
  });
});

/* ---------------------------------------- generateRandomCpr ---------------------------------------- */

describe("generateRandomCpr", () => {
  describe("Testing valid data in generateRandomCpr", () => {

    const data = [
      { 'dob': "01/12/1908", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "011208-1231" },
      { 'dob': "08/06/1998", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "080698-1231" },
      { 'dob': "02/12/1908", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "021208-1231" },
      { 'dob': "25/10/2023", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "251023-1231" },
      { 'dob': "24/10/2023", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "241023-1231" },
    ]

    test.each(data)("Generate a valid CPR number with correct format", ({ dob, threeRandomDigits, lastDigit }) => {
      expect(generateRandomCpr(dob, threeRandomDigits, lastDigit)).toMatch(/^\d{1,10}-+?\d{0,9}$/);
    });

    test("Valid CPR as string", () => {
      const dob = "08/06/1998";
      const threeRandomDigits = "123";
      const lastDigit = "1";
      const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

      expect(typeof result).toBe('string');
    });

    test.each(data)("CPR with correct date", ({ dob, threeRandomDigits, lastDigit, expected }) => {
      expect(generateRandomCpr(dob, threeRandomDigits, lastDigit)).toBe(expected);
    });

    test.each(data)("CPR with correct last four digits", ({ dob, threeRandomDigits, lastDigit, expected }) => {
      const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

      const lastFourDigits = result.split('-')[1];

      expect(lastFourDigits).toBe(expected.split('-')[1]);
    });
  });

  describe("Invalid data in generateRandomCPR", () => {
    const data = [
      { 'dob': "01/01/01", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01/aa/0101", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "cc/01/0101", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01/01/bb", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "0/01/0101", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01/0/01", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01/01/0", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01/01/", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01//0101", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "/01/0101", 'threeRandomDigits': "123", 'lastDigit': "1", 'expected': "Invalid date format" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "abc", 'lastDigit': "1", 'expected': "Invalid three random digits" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "1-1", 'lastDigit': "1", 'expected': "Invalid three random digits" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "", 'lastDigit': "1", 'expected': "Invalid three random digits" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "0", 'lastDigit': "1", 'expected': "Invalid three random digits" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "123", 'lastDigit': "a", 'expected': "Invalid last digit" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "123", 'lastDigit': "12", 'expected': "Invalid last digit" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "123", 'lastDigit': "", 'expected': "Invalid last digit" },
      { 'dob': "01/01/2022", 'threeRandomDigits': "123", 'lastDigit': "-1", 'expected': "Invalid last digit" },
    ]

    test.each(data)("to throw error for invalid date format", ({ dob, threeRandomDigits, lastDigit, expected }) => {
      expect(() => generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError(expected)
    });

    test('Throw error for invalid three random digits', () => {
      const dob = '08/06/1998';
      const threeRandomDigits = '1111';
      const lastDigit = '1';

      expect(() =>
        generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError('Invalid three random digits');
    });

    test('Throw error for invalid last digit', () => {
      const dob = '08/06/1998';
      const threeRandomDigits = '123';
      const lastDigit = '12';

      expect(() =>
        generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError('Invalid last digit');
    });

    test("Throw error if all values are invalid", () => {
      const dob = "08/067/1998";
      const threeRandomDigits = "1234";
      const lastDigit = "122";

      expect(() =>
        generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError('Invalid date format');
    });
  });
});

/* ---------------------------------------- setRandomGenderDigit ---------------------------------------- */

describe('getRandomGenderDigit', () => {
  describe('Testing valid data in setRandomGenderDigit', () => {
    const genderData = [
      { gender: 'male', expected: 1 },
      { gender: 'female', expected: 2 },
      { gender: 'mAle', expected: 1 },
      { gender: 'fEmAlE', expected: 2 },
    ];
    test.each(genderData)(
      'Gender validation on parameter passes',
      ({ gender, expected }) => {
        expect(setRandomGenderDigit(gender) % 2 === 0).toBe(expected % 2 === 0);
      }
    );
  });

  describe('Testing invalid data in getRandomGenderDigit', () => {
    const invalidError = new Error('Invalid gender format');
    const genderData = [
      { gender: 'fem', expected: invalidError },
      { gender: ' ', expected: invalidError },
      { gender: '', expected: invalidError },
      { gender: '!.-', expected: invalidError },
    ];
    test.each(genderData)(
      'Gender validation on parameter passes',
      ({ gender, expected }) => {
        expect(() => setRandomGenderDigit(gender)).toThrowError(expected);
      }
    );
  });
});