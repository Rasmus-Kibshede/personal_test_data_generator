import { setRandomCpr } from "../../src/Services/personService";

// Mock the default export and named exports
jest.mock("../../src/Services/personService", () => {
    
  return {
    __esModule: true,
    getRandomNameAndGender: jest.fn(() => Promise.resolve({ gender: 'female' })
    ),
    setRandomBirthday: jest.fn(() => Promise.resolve("08/06/1999")),
  };
});

let generatedCpr: string;

beforeEach(async () => {
    generatedCpr = await setRandomCpr();
});

describe("setRandomCpr", () => {
    describe("CPR format passes", () => {

        test("should generate a valid CPR number", async () => {
            generatedCpr = await setRandomCpr();
            // Expect the generated CPR to be a string
            expect(typeof generatedCpr).toBe("string");
        });
    });

    describe("CPR format passes", () => {
  });
});
