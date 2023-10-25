import { generateRandomDoor, generateRandomFloor, generateRandomHouseNumber, generateStreetName, generateStreetVariation } from "../../src/Services/addressService";

/* ---------------------------------------- generateRandomFloor ---------------------------------------- */

describe("generateRandomFloor", () => {
    describe("testing valid data in generateRandomFloor", () => {
      test("to generate a valid floor number", async () => {
        const result = await generateRandomFloor();
        expect(typeof result).toBe("string");
      });
  
      test("to see if its a numberic value or st", async () => {
        const result = await generateRandomFloor();
        expect(result).toMatch(/^(st|\d+)$/);
      });
  
      test("to see if it's greater than or equal to 1", async () => {
        const result = await generateRandomFloor();
        expect(result.length).toBeGreaterThanOrEqual(1);
      });
  
      test("to see if it's less than or equal to 2", async () => {
        const result = await generateRandomFloor();
        expect(result.length).toBeLessThanOrEqual(2);
      });
    });
  });
  
  /* ---------------------------------------- generateRandomNumberForDoor ---------------------------------------- */
  
  describe("generateRandomNumberForDoor", () => {
    describe("testing valid data in generateRandomNumberForDoor", () => {
      test("to generate a valid door number", async () => {
        const result = await generateRandomHouseNumber();
        expect(typeof result).toBe("string");
      });
  
      test("to see if it's greater than or equal to 1", async () => {
        const result = await generateRandomHouseNumber();
        expect(result.length).toBeGreaterThanOrEqual(1);
      });
  
      test("to see if it's less than or equal to 4", async () => {
        const result = await generateRandomHouseNumber();
        expect(result.length).toBeLessThanOrEqual(4);
      });
    });
  });
  
    /* ---------------------------------------- generateStreetName ---------------------------------------- */
  
  describe("generateStreetName", () => {
      describe("testing valid data in generateStreetName", () => {
        test('to generate a streetname that  ', async () => {
          const result = await generateStreetName();
          expect(typeof result).toBe("string");
        });
  
        test('to generate a streetname that  ', async () => {
          const result = await generateStreetName();
          expect(result.length).toBeGreaterThanOrEqual(4);
        });
  
        test('to generate a streetname that  ', async () => {
          const result = await generateStreetName();
          expect(result.length).toBeLessThanOrEqual(9);
        });
    });
  });
  
    /* ---------------------------------------- generateStreetVariation ---------------------------------------- */
  
    describe("generateStreetVariation", () => {
      describe("testing valid data in generateStreetVariation", () => {
        test('to generate a streetname that is not empty', async () => {
          const result = await generateStreetVariation();
          expect(result).not.toBe("");
        });
      });
    
      test('to generate a streetname that  ', async () => {
        const result = await generateStreetVariation();
        expect(typeof result).toBe("string");
      });
    
      test('to generate a streetname that  ', async () => {
        const result = await generateStreetVariation();
        expect(result.length).toBeGreaterThanOrEqual(2);
      });
    
      test('to generate a streetname that  ', async () => {
        const result = await generateStreetVariation();
        expect(result.length).toBeLessThanOrEqual(9);
      });
    });

/* ---------------------------------------- generateRandomDoor ---------------------------------------- */

describe("generateRandomDoor", () => {
    describe("testing valid data in generateRandomDoor", () => {
        test('to generate a door that is a string', async () => {
            const result = await generateRandomDoor();
            expect(typeof result).toBe("string");
        });

        test('to generate a door that is either tv or th or mf', async () => {
            const result = await generateRandomDoor();
            expect(result).toMatch(/^(tv|th|mf)$/);
        });

        test('to generate a door that is a string', async () => {
            const result = await generateRandomDoor();
            expect(result.length).toEqual(2);
        });
    });
});