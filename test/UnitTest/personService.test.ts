import 'dotenv/config';
import { getRandomNameAndGender } from '../../src/Services/personService';
import { PersonDTO1, PersonDTO2 } from '../../src/Model/PersonDTO';
let persons: PersonDTO1[];

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