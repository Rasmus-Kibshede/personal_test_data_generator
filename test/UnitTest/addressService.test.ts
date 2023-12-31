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
      expect(result).toMatch(/^\s*(st|\d+)$/);
    });

    test('Greater than or equal to 1', async () => {
      const result = await generateRandomFloor();
      expect(result.length).toBeGreaterThanOrEqual(1);
    });

    test('Less than or equal to 3', async () => {
      const result = await generateRandomFloor();
      expect(result.length).toBeLessThanOrEqual(3);
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

    const data = [
      { length: 0 },
      { length: 1 },
      { length: 2 },
      { length: 10 },
      { length: 11 },
      { length: -1 },
      { length: 1.5 },
      { length: Number('a') },
      { length: Number('&') },
      { length: Number(true) },
      { length: Number(false) },
      { length: Number(null) },
      { length: Number(undefined) },
      { length: Number([]) },
      { length: Number({}) },
    ];

    test.each(data)('throws error for invalid length $length', async ({ length }) => {
      await expect(generateStreetName(length)).rejects.toThrow('No street name found with that length');
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

    const data = [
      { length: -1 },
      { length: 1.5 },
      { length: 0 },
      { length: 1 },
      { length: 7},
      { length: 8 },
      { length: 10 },
      { length: 11 },
      { length: Number('a') },
      { length: Number('&') },
      { length: Number(true) },
      { length: Number(false) },
      { length: Number(null) },
      { length: Number(undefined) },
      { length: Number([]) },
      { length: Number({}) },
    ];

    test.each(data)('throws error for invalid length $length', async ({ length }) => {
      await expect(generateStreetVariation(length)).rejects.toThrow('No street variation was found. Please try again later');
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
      expect(result).toMatch(/^\s*(tv|th|mf|st)\s*$/);
    });

    test('Generate a door that is a string', async () => {
      const result = await generateRandomDoor();
      expect(result.length).toEqual(3);
    });
  });
});