import { generateRandomDoor, generateRandomFloor, generateRandomHouseNumber, generateStreetName, generateStreetVariation } from "../../src/Services/addressService";

/* ---------------------------------------- generateRandomFloor ---------------------------------------- */

describe('generateRandomFloor', () => {
  describe('Testing valid data in generateRandomFloor', () => {
    test('Generate a valid floor number', async () => {
      const result = await generateRandomFloor();
      expect(typeof result).toBe('string');
    });

    test('Numberic value or st', async () => {
      const result = await generateRandomFloor();
      expect(result).toMatch(/^(st|\d+)$/);
    });

    test('Greater than or equal to 1', async () => {
      const result = await generateRandomFloor();
      expect(result.length).toBeGreaterThanOrEqual(1);
    });

    test('Less than or equal to 2', async () => {
      const result = await generateRandomFloor();
      expect(result.length).toBeLessThanOrEqual(2);
    });
  });
});

/* ---------------------------------------- generateRandomNumberForDoor ---------------------------------------- */

describe('generateRandomNumberForDoor', () => {
  describe('Testing valid data in generateRandomNumberForDoor', () => {

    test('to generate a valid door number', async () => {
      const result = await generateRandomHouseNumber();
      expect(typeof result).toBe('string');
    });

    test('Greater than or equal to 1', async () => {
      const result = await generateRandomHouseNumber();
      expect(result.length).toBeGreaterThanOrEqual(1);
    });

    test('less than or equal to 5', async () => {
      const result = await generateRandomHouseNumber();
      expect(result.length).toBeLessThanOrEqual(5);
    });
  });
});

/* ---------------------------------------- generateStreetName ---------------------------------------- */

describe('generateStreetName', () => {
  describe('testing valid data in generateStreetName', () => {

    test('Testing street name type', async () => {
      const result = await generateStreetName(4);
      expect(typeof result).toBe('string');
    });

    test('Greater then 4', async () => {
      const result = await generateStreetName(4);
      expect(result.length).toBeGreaterThanOrEqual(4);
    });

    test('Less then or equal 9', async () => {
      const result = await generateStreetName(9);
      expect(result.length).toBeLessThanOrEqual(9);
    });

    const data = [3, 4, 6, 8, 9];

    test.each(data)('generates a street name of length %i', async (length) => {
      const name = await generateStreetName(length);
      expect(name).toHaveLength(length);
    });
  });

  describe('testing invalid data in generateStreetName', () => {

    const error = 'No street name found with that length';

    const data = [
      { length: 0, error: error },
      { length: 1, error: error },
      { length: 2, error: error },
      { length: 10, error: error },
      { length: 11, error: error },
      { length: -1, error: error },
      { length: 1.5, error: error },
      { length: Number('a'), error: error },
      { length: Number('&'), error: error },
      { length: Number(true), error: error },
      { length: Number(false), error: error },
      { length: Number(null), error: error },
      { length: Number(undefined), error: error },
      { length: Number([]), error: error },
      { length: Number({}), error: error },
    ];

    test.each(data)('throws error for invalid length $length', async ({ length, error }) => {
      await expect(generateStreetName(length)).rejects.toThrow(error);
    });
  });
});

/* ---------------------------------------- generateStreetVariation ---------------------------------------- */

describe('generateStreetVariation', () => {
  describe('testing valid data in generateStreetVariation', () => {

    const data = [2, 3, 5, 6, 9];

    test.each(data)('generates a street variation for valid length: %i', async (length) => {
      await expect(generateStreetVariation(length)).resolves.not.toThrow();
    });

    test('Generate a streetname that is not empty', async () => {
      const result = await generateStreetVariation(4);
      expect(result).not.toBe("");
    });

    test('Testing streetVariation type', async () => {
      const result = await generateStreetVariation(4);
      expect(typeof result).toBe('string');
    });

    test('Greater or equal to 2', async () => {
      const result = await generateStreetVariation(2);
      expect(result.length).toBeGreaterThanOrEqual(2);
    });

    test('Less or equal to 9', async () => {
      const result = await generateStreetVariation(2);
      expect(result.length).toBeLessThanOrEqual(9);
    });
  });

  describe('testing invalid data in generateStreetVariation', () => {

    const error = 'No street variation was found. Please try again later';

    const data = [
      { length: -1, error: error },
      { length: 1.5, error: error},
      { length: 0, error: error },
      { length: 1, error: error },
      { length: 7, error: error },
      { length: 8, error: error },
      { length: 10, error: error },
      { length: 11, error: error },
      { length: Number('a'), error: error },
      { length: Number('&'), error: error },
      { length: Number(true), error: error },
      { length: Number(false), error: error },
      { length: Number(null), error: error },
      { length: Number(undefined), error: error },
      { length: Number([]), error: error },
      { length: Number({}), error: error },
    ];

    test.each(data)('throws error for invalid length $length', async ({ length, error }) => {
      await expect(generateStreetVariation(length)).rejects.toThrow(error);
    });
  });
});

/* ---------------------------------------- generateRandomDoor ---------------------------------------- */

describe('generateRandomDoor', () => {
  describe('Testing valid data in generateRandomDoor', () => {
    test('Testing return type', async () => {
      const result = await generateRandomDoor();
      expect(typeof result).toBe("string");
    });

    test('Generate a door that is either tv or th or mf', async () => {
      const result = await generateRandomDoor();
      expect(result).toMatch(/^\s*(tv|th|mf)\s*$/);
    });

    test('Generate a door that is a string', async () => {
      const result = await generateRandomDoor();
      expect(result.length).toEqual(3);
    });
  });
});