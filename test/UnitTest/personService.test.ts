import 'dotenv/config';
import { getRandomNameAndGender } from '../../src/Services/personService';
import { PersonDTO1, PersonDTO2 } from '../../src/Model/PersonDTO';
let persons: PersonDTO1[];

jest.mock("../../src/Repositories/fileHandler", () => {
    const originalModule = jest.requireActual("../../src/Repositories/fileHandler");
    return {
        getAllPersonsFromFile: jest.fn(originalModule).mockImplementation(() => Promise.resolve(
            persons
        ))
    };
});

let person: PersonDTO2;


beforeEach(async () => {
    person = await getRandomNameAndGender();
});

describe('', () => {
    persons = [
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
    ];


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

        test('Fullname matches alphabet chars with space', () => {
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

// describe('', () => {
//     persons = [
//         {
//             name: 'Anneme9tte P.',
//             surname: 'Nilsson',
//             gender: 'female'
//         },
//         {
//             name: "Lucas M,",
//             surname: "Kj2ær",
//             gender: "male"
//         },
//         {
//             name: "LucÅs M.",
//             surname: "Kj2ær",
//             gender: "mal10e"
//         }
//     ];
// });