import 'dotenv/config';
import { getRandomNameAndGender, randomNumberPrefix, generateRandomDigits } from '../../src/Services/personService';
import validator from 'validator';
import { PersonDTO2 } from '../../src/Model/PersonDTO';

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
  
  describe('testing prefix', () => {
      describe("testing valid prefix", () => {
          test("should be bigger than 0", () => {
              expect(prefix.length).toBeGreaterThan(0);
          });
  
          test("should be less than 9", () => {
              expect(prefix.length).toBeLessThanOrEqual(3);
          });
  
          test('should be a number', () => {
              expect(validator.isNumeric(prefix)).toBe(true);
          })
      });
  })
  
  describe("testing generateDigtits", () => {
  
      describe("Testing length of randomDigits", () => {
          test.each(prefixes)('testing length',async ({ number, expected }) => {
            let randomDigits = await generateRandomDigits(number.length);
            expect(randomDigits.length).toBe(expected); 
          })
        })
  });




jest.mock("../../src/Repositories/fileHandler", () => {

    return {
        __esModule: true,
        getAllPersonsFromFile: jest.fn(() => Promise.resolve([
            {
                name: 'Annemette P.',
                surname: 'Nilsson',
                gender: 'female'
            },
            {
                name: "Lucas M.",
                surname: "Kjær",
                gender: "male"
            }
        ])).mockImplementationOnce(() => Promise.resolve([
            {
                name: 'Anneme2tte P.',
                surname: 'Ni2lsson',
                gender: 'f2emale'
            },
            {
                name: "Luc2as M.",
                surname: "K2jær",
                gender: "m2ale"
            }
        ]))
    };
});

let person: PersonDTO2;

beforeEach(async () => {
    person = await getRandomNameAndGender();
});

afterEach(() => {
    // jest.clearAllMocks();
});

// const t = (isValidtData: boolean) => {
//     if (isValidtData) {
//         persons = [
//             {
//                 name: 'Annemette P.',
//                 surname: 'Nilsson',
//                 gender: 'female'
//             },
//             {
//                 name: "Lucas M.",
//                 surname: "Kjær",
//                 gender: "male"
//             }
//         ];
//     } else {
//         persons = [
//             {
//                 name: 'Anneme9tte P.',
//                 surname: 'Nilsson',
//                 gender: 'female'
//             },
//             {
//                 name: "Lucas M,",
//                 surname: "Kj2ær",
//                 gender: "male"
//             },
//             {
//                 name: "LucÅs M.",
//                 surname: "Kj2ær",
//                 gender: "mal10e"
//             }
//         ];
//     };
// };


describe('', () => {

    // getRandomNameAndGender().then((p) => {
    //     person = p;
    //     console.log('kibshede', person);
    // });


    // describe('Fullname length passes', () => {
    //     test('length is less then max string length', () => {
    //         console.log('kibshede12', person);

    //         expect(person.fullname.length).toBeLessThan(2147483647);
    //     });

    //     test('length is greater then 0', async () => {
    //         expect(person.fullname.length).toBeGreaterThan(0);
    //     });
    // });

    // describe('Gender length passes', () => {
    //     test('length is less then max string length', async () => {
    //         expect(person.gender.length).toBeLessThan(2147483647);
    //     });

    //     test('length is greater then 0', async () => {
    //         expect(person.gender.length).toBeGreaterThan(0);
    //     });
    // });

    describe('Fullname format passes', () => {
        // test('Fullname contains a space', () => {
        //     expect(person.fullname).toContain(' ');
        // });

        test('Fullname matches alphabet chars with space', async () => {
            person = await getRandomNameAndGender();
            expect(person.fullname).toMatch(/^[a-æA-Æ\sa.c]*$/);
        });
    });

    describe('Gender format passes', () => {
        test('Gender contains male or female passes', async () => {

            expect(['male', 'female']).toContain(person.gender);
        });

        test('Gender matches alphabet chars', () => {
            expect(person.gender).toMatch(/^[a-mA-M]*$/);
        });
    });
});

describe('', () => {

    describe('Gender format fail', () => {
        test('Gender contains male or female fail', async () => {
            person = await getRandomNameAndGender();
            expect(['male', 'female']).toContain(person.gender);
        });

        test('Gender matches alphabet chars fail', async () => {
            person = await getRandomNameAndGender();
            expect(person.gender).toMatch(/^[a-mA-M]*$/);
        });
    });
});