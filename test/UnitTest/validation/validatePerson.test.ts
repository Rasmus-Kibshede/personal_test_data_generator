import { Person } from '../../../src/Model/Person';
import { validateName, validateGender, validateNameAndGender } from '../../../src/util/validation/personValidation';

describe('Name validator passes', () => {
    const nameData = [
        { 'name': 'Tø æå', 'expected': true },
        { 'name': 'Tom h. mikkelsen', 'expected': true },
        { 'name': 'Tom mikkelsen', 'expected': true },
        { 'name': 'Tom m1212elsen', 'expected': false },
        { 'name': 'Tom23 hansen', 'expected': false },
        { 'name': '', 'expected': false },
        { 'name': '1213', 'expected': false },
        { 'name': '!!!', 'expected': false },
        { 'name': 'test', 'expected': false },
    ];

    test.each(nameData)(`Name validation on parameter passes`, ({ name, expected }) => {
        expect(validateName(name)).toBe(expected);
    });
});

describe('Name validator fails', () => {
    const nameData = [
        { 'name': 'Tom m1212elsen', 'expected': false },
        { 'name': 'Tom23 hansen', 'expected': false },
        { 'name': '', 'expected': false },
        { 'name': '1213', 'expected': false },
        { 'name': '!!!', 'expected': false },
        { 'name': 'test', 'expected': false },
    ];

    test.each(nameData)(`Name invalid data fails`, ({ name, expected }) => {
        expect(validateName(name)).toBe(expected);
    });
});

describe('Gender validator passes', () => {
    const genderData = [
        { 'gender': 'male', expected: true },
        { 'gender': 'female', expected: true },
    ]

    test.each(genderData)('Gender valid data passes', ({ gender, expected }) => {
        expect(validateGender(gender)).toBe(expected);
    });
});

describe('Gender validator fails', () => {
    const genderData = [
        { 'gender': 'fem', expected: false },
        { 'gender': ' ', expected: false },
        { 'gender': '', expected: false },
        { 'gender': '!.-', expected: false },
    ]

    test.each(genderData)('Gender invalid data fails', ({ gender, expected }) => {
        expect(validateGender(gender)).toBe(expected);
    });
});

describe('validateNameAndGender validator passes', () => {
    const personData = [
        {
            'fullname': 'Tom mikkelsen',
            'gender': 'male',
            'expected': {
                fullname: 'Tom mikkelsen',
                gender: 'male'
            }
        }
    ]

    test.each(personData)('Gender & name valid person data passes', ({ fullname, gender, expected }) => {
        const person = new Person(fullname, gender);
        expect(validateNameAndGender(person).fullname).toBe(expected.fullname);
        expect(validateNameAndGender(person).gender).toBe(expected.gender);
    });
});

describe('validateNameAndGender validator fails', () => {

    const validateError = new Error('Validation failed');
    const personData = [
        {
            'fullname': 'T1m mikkelsen',
            'gender': 'male',
            'expected': validateError
        },
        {
            'fullname': 'Tom mikkelsen',
            'gender': 'mle',
            'expected': validateError
        },
        {
            'fullname': 'ads24',
            'gender': 'ma132e',
            'expected': validateError
        }
    ]

    test.each(personData)('Gender valid person data passes', ({ fullname, gender, expected }) => {
        const person = new Person(fullname, gender);
        expect(() => validateNameAndGender(person)).toThrowError(expected);
    });
});



