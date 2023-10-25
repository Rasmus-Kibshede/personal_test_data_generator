import 'dotenv/config';
import {
  setRandomBirthday,
  randomNumberPrefix,
  generateRandomDigits,
  generateRandomCpr,
  setRandomGenderDigit,
} from '../../src/Services/personService';
import validator from 'validator';

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

describe('Generate random CPR', () => {
  describe('Valid data in generateRandomCpr', () => {
    test('Valid CPR number with correct format', () => {
      const dob = '08/06/1998';
      const threeRandomDigits = '123';
      const lastDigit = '1';
      const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

      expect(result).toMatch(/^\d{1,10}-?\d{0,9}$/);
    });

    test('Valid CPR as string', () => {
      const dob = '08/06/1998';
      const threeRandomDigits = '123';
      const lastDigit = '1';
      const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

      expect(typeof result).toBe('string');
    });

    test('CPR with correct date', () => {
      const dob = '08/06/1998';
      const threeRandomDigits = '123';
      const lastDigit = '1';

      const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

      const dayPart = result.substring(0, 2);
      const monthPart = result.substring(2, 4);
      const yearPart = result.substring(4, 6);

      expect(dayPart).toBe('08');
      expect(monthPart).toBe('06');
      expect(yearPart).toBe('98');
    });

    test('CPR with correct last four digits', () => {
      const dob = '08/06/1998';
      const threeRandomDigits = '123';
      const lastDigit = '1';

      const result = generateRandomCpr(dob, threeRandomDigits, lastDigit);

      const lastFourDigits = result.substring(7, 11);

      expect(lastFourDigits).toBe('1231');
    });
  });

  describe('Invalid data in generateRandomCPR', () => {
    test('Throw error for invalid date format', () => {
      const dob = '111/12/28';
      const threeRandomDigits = '123';
      const lastDigit = '1';

      expect(() =>
        generateRandomCpr(dob, threeRandomDigits, lastDigit)).toThrowError('Invalid date format');
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

    test('Throw error if all values are invalid', () => {
      const dob = '08/067/1998';
      const threeRandomDigits = '1234';
      const lastDigit = '122';

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