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
          const result = await generateStreetName();
          expect(typeof result).toBe('string');
        });
  
        test('Greater then 4', async () => {
          const result = await generateStreetName();
          expect(result.length).toBeGreaterThanOrEqual(4);
        });
  
        test('Less then or equal 9', async () => {
          const result = await generateStreetName();
          expect(result.length).toBeLessThanOrEqual(9);
        });
    });
  });
  
    /* ---------------------------------------- generateStreetVariation ---------------------------------------- */
  
    describe('generateStreetVariation', () => {
      describe('testing valid data in generateStreetVariation', () => {
        test('Generate a streetname that is not empty', async () => {
          const result = await generateStreetVariation();
          expect(result).not.toBe("");
        });
      });
    
      test('Testing streetVariation type', async () => {
        const result = await generateStreetVariation();
        expect(typeof result).toBe('string');
      });
    
      test('Greater or equal to 2', async () => {
        const result = await generateStreetVariation();
        expect(result.length).toBeGreaterThanOrEqual(2);
      });
    
      test('Less or equal to 9', async () => {
        const result = await generateStreetVariation();
        expect(result.length).toBeLessThanOrEqual(9);
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
            expect(result).toMatch(/^(tv|th|mf)$/);
        });

        test('Generate a door that is a string', async () => {
            const result = await generateRandomDoor();
            expect(result.length).toEqual(2);
        });
    });
});