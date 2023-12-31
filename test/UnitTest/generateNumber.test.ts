import { generateRandomNumber } from "../../src/util/generateNumber";


let randomNumber: number;

/* ----------------------------------------generateRandomNumber ---------------------------------------- */
describe('generateRandomNumber', () => {
  //PARAMETERIZED TEST HERE????

    beforeEach(async () =>  {
         randomNumber = generateRandomNumber(1, 2);
    });

    test('Year is a valid integer', () => {
        expect(Number.isInteger(randomNumber)).toBe(true);
    });

    test('Gear is a number', () => {
        expect(typeof randomNumber).toBe('number');
      });

      test('Gear is an integer', () => {
        expect(randomNumber % 1).toBe(0);
      });

    test('Random number is within range lower', () => {
        expect(randomNumber).toBeGreaterThanOrEqual(1);
    });

    test('Random number is within range lower', () => {
        expect(randomNumber).toBeLessThanOrEqual(2);
    });

    test('Random not 0 lower', () => {
        expect(randomNumber).not.toBe(0);
    });

    test('Random not 0 upper', () => {
        expect(randomNumber).not.toBe(3);
    });

    test('Type is not undefined', () => {
        expect(randomNumber).not.toBeUndefined();
      });
    
      test('Type is not null', () => {
        expect(randomNumber).not.toBeNull();
      });
});