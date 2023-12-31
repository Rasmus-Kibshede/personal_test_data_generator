import { getRandomNameAndGender } from '../../src/Services/personService';
import { Person } from '../../src/Model/Person';

let person: Person;

beforeAll(async () => {
    person = await getRandomNameAndGender();
});

jest.mock('../../src/Repositories/fileHandler', () => {
    return {
        __esModule: true,
        getAllPersonsFromFile: jest.fn(() => {
            return Promise.resolve([
                {
                    name: 'Annemette P.',
                    surname: 'Nilsson',
                    gender: 'female'
                },
                {
                    name: 'Lucas M.',
                    surname: 'Kjær',
                    gender: 'male'
                }
            ]);
        }).mockImplementationOnce(() => {
            return Promise.resolve([
                {
                    name: 'Annemette P.',
                    surname: 'Nilsson',
                    gender: 'female'
                },
                {
                    name: 'Lucas M.',
                    surname: 'Kjær',
                    gender: 'male'
                },
                {
                    name: 'TestSæt E. T',
                    surname: 'Et',
                    gender: 'male'
                }
            ]);
        }).mockImplementationOnce(() => {
            return Promise.resolve([
                {
                    name: 'Anneme9tte P.',
                    surname: 'Nil7sson',
                    gender: 'fema9le'
                },
                {
                    name: 'Lucas M,',
                    surname: 'Kj2ær',
                    gender: 'maale'
                },
            ]);
        })
    };
});

describe('Testing random name and gender', () => {

    describe('Fullname length passes', () => {
        test('length is less then max string length', async () => {
            expect(person.getFullName().length).toBeLessThan(2147483647);
        });

        test('length is greater then 0', async () => {
            expect(person.getFullName().length).toBeGreaterThan(0);
        });
    });

    describe('Gender length passes', () => {
        test('length is less then max string length', async () => {
            expect(person.getGender().length).toBeLessThan(2147483647);
        });

        test('length is greater then 0', async () => {
            expect(person.getGender().length).toBeGreaterThan(0);
        });
    });

    describe('Fullname format passes', () => {
        test('Fullname contains a space', () => {
            expect(person.getFullName()).toContain(' ');
        });

        test('Fullname matches alphabet chars with space', async () => {
            expect(person.getFullName()).toMatch(/^[a-øA-Ø\sa.c]*$/);
        });
    });

    describe('Gender format passes', () => {
        test('Gender contains male or female passes', async () => {

            expect(['male', 'female']).toContain(person.getGender());
        });

        test('Gender matches alphabet chars', () => {
            expect(person.getGender()).toMatch(/^[a-mA-M]*$/);
        });
    });
});
