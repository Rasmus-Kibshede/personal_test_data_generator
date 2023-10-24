import "dotenv/config";
import { randomNumberPrefix, generateRandomDigits } from "../../src/Services/personService";

let prefix: string;
let randomDigits: string;
const prefixes = [
  {'number': '2', 'expected': 7},
  {'number': '30', 'expected': 6},
  {'number': '342', 'expected': 5},
  ];

beforeAll(async () => {
    prefix = await randomNumberPrefix();
    randomDigits = await generateRandomDigits(prefix.length);
    console.log(prefix);
    console.log(randomDigits);
});

describe("testing generateFakeMobilePhoneNumber", () => {
    const phoneNumberPrefixes = [
        
    ];

    describe("testing valid prefix", () => {
        test("should be bigger than 0", () => {
            expect(prefix.length).toBeGreaterThan(0);
        });

        test("should be less than 9", () => {
            expect(prefix.length).toBeLessThanOrEqual(3);
        });
    });

    describe("Testing valid digtigts from all prefixes", () => {

    })

    describe("Testing length of randomDigits", () => {
        test.each(prefixes)('testing length',async ({ number, expected }) => {
          let randomDigits = await generateRandomDigits(number.length);
          expect(randomDigits.length).toBe(expected); 
        })
      })
});
