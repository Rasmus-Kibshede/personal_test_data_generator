import 'dotenv/config';
import { getRandomNameAndGender, setRandomCpr, setRandomBirthday } from '../../src/Services/personService';
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

// describe('', () => {
//     describe('Fullname format passes', () => {
//         // test('Fullname contains a space', () => {
//         //     expect(person.fullname).toContain(' ');
//         // });

//         test('Fullname matches alphabet chars with space', async () => {
//             person = await getRandomNameAndGender();
//             expect(person.fullname).toMatch(/^[a-æA-Æ\sa.c]*$/);
//         });
//     });

//     describe('Gender format passes', () => {
//         test('Gender contains male or female passes', async () => {

//             expect(['male', 'female']).toContain(person.gender);
//         });

//         test('Gender matches alphabet chars', () => {
//             expect(person.gender).toMatch(/^[a-mA-M]*$/);
//         });
//     });
// });

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

describe('setRandomBirthday', () => {
    it('should generate a random date in "dd/mm/yyyy" format', async () => {
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        const generatedDate = await setRandomBirthday();
        expect(generatedDate).toMatch(datePattern);
    });

    it('should generate a random date greater than or equal to a valid start date', async () => {
        const validStartDate = new Date(1908, 5, 8).getTime();
        const generatedDate = await setRandomBirthday();

        const dateParts = generatedDate.split('/');
        const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        expect(generatedDateObj.getTime()).toBeGreaterThanOrEqual(validStartDate);
    });

    it('should generate a random date less than or equal to the current date', async () => {
        const validEndDate = new Date().getTime();
        const generatedDate = await setRandomBirthday();

        const dateParts = generatedDate.split('/');
        const generatedDateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        expect(generatedDateObj.getTime()).toBeLessThanOrEqual(validEndDate);
    });
});

// Test on length, if it is string, if it is a number, if it is a valid date, if it is a valid cpr number
describe('setRandomCpr', () => {
    it('should generate a random CPR number in "ddmmyyxxxx" format', async () => {
        const cprPattern = /^\d{10}$/;
        const generatedCpr = await setRandomCpr();
        expect(generatedCpr).toMatch(cprPattern);
    });

    it('should generate a random CPR number with a valid day', async () => {
        const generatedCpr = await setRandomCpr();
        const day = generatedCpr.substring(0, 2);
        expect(+day).toBeGreaterThanOrEqual(1);
        expect(+day).toBeLessThanOrEqual(31);
    });

    it('should generate a random CPR number with a valid month', async () => {
        const generatedCpr = await setRandomCpr();
        const month = generatedCpr.substring(2, 4);
        expect(+month).toBeGreaterThanOrEqual(1);
        expect(+month).toBeLessThanOrEqual(12);
    });

    it('should generate a random CPR number with a valid year', async () => {
        const generatedCpr = await setRandomCpr();
        const year = generatedCpr.substring(4, 6);
        expect(+year).toBeGreaterThanOrEqual(0);
        expect(+year).toBeLessThanOrEqual(99);
    });

    it('should generate a random CPR number with a valid last digit', async () => {
        const generatedCpr = await setRandomCpr();
        const lastDigit = generatedCpr.substring(9, 10);
        expect(+lastDigit).toBeGreaterThanOrEqual(0);
        expect(+lastDigit).toBeLessThanOrEqual(9);
    });
});