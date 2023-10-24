import { validateName, validateGender } from '../../src/Services/personService';

describe('Validate functions passes', () => {
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

    test.each(nameData)('val', ({ name, expected }) => {
        expect(validateName(name)).toBe(expected);
    })

    // const genderData = [
    //     { 'gender': 'male', expected: true },
    //     { 'gender': 'female', expected: true },
    //     { 'gender': 'fem', expected: false },
    //     { 'gender': ' ', expected: false },
    //     { 'gender': '', expected: false },
    //     { 'gender': '!.-', expected: false },
    // ]

    // test.each(genderData)('val', ({ gender, expected }) => {
    //     expect(validateGender(gender)).toBe(expected);
    // })
});