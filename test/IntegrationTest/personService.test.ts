import { getRandomNameAndGender, getNameGenderDob } from '../../src/Services/personService';
import { Person } from '../../src/Model/Person';

let person: Person;

beforeAll(async () => {
    person = await getRandomNameAndGender();
});

jest.mock("../../src/Repositories/fileHandler", () => {
    return {
        __esModule: true,
        getAllPersonsFromFile: jest.fn(() => {
            //Denne kaldes ikke.
            return Promise.resolve([
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
            ]);
        }).mockImplementationOnce(() => {
            //Denne kaldes første gang BeforeAll kører. 
            return Promise.resolve([
                {
                    name: 'Annemette P.',
                    surname: 'Nilsson',
                    gender: 'female'
                },
                {
                    name: "Lucas M.",
                    surname: "Kjær",
                    gender: "male"
                },
                {
                    name: "TestSæt E. T",
                    surname: "Et",
                    gender: "male"
                }
            ]);
        }).mockImplementationOnce(() => {
            //Denne kaldes anden gang beforeAll kører - nu inde i describe block. Bruges ikke pt
            return Promise.resolve([
                {
                    name: 'Anneme9tte P.',
                    surname: 'Nil7sson',
                    gender: 'fema9le'
                },
                {
                    name: "Lucas M,",
                    surname: "Kj2ær",
                    gender: "maale"
                },
                {
                    name: "LucÅs M.",
                    surname: "Kj2ær",
                    gender: "mal10e"
                },
                {
                    name: "TestSæt T. O",
                    surname: "To",
                    gender: "malse"
                }
            ]);
        })
    };
});

describe('', () => {

    describe('Fullname length passes', () => {
        test('length is less then max string length', async () => {
            expect(person.fullname.length).toBeLessThan(2147483647);
        });

        test('length is greater then 0', async () => {
            expect(person.fullname.length).toBeGreaterThan(0);
        });
    });

    describe('Gender length passes', () => {
        test('length is less then max string length', async () => {
            expect(person.gender.length).toBeLessThan(2147483647);
        });

        test('length is greater then 0', async () => {
            expect(person.gender.length).toBeGreaterThan(0);
        });
    });

    describe('Fullname format passes', () => {
        test('Fullname contains a space', () => {
            expect(person.fullname).toContain(' ');
        });

        test('Fullname matches alphabet chars with space', async () => {
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







//mock

// describe('name gender and dob', () => {
//     test('name gender and dob', async () => {
//         expect((await nameGenderDob()).dateOfBirth).not.toBe(null);
//     });
// });