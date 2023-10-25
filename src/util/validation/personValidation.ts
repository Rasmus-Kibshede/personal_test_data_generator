import validator from 'validator';
import { Person } from '../../Model/Person';

export const validateNameAndGender = (person: Person) => {
    if (validateGender(person.gender) && validateName(person.fullname)) {
        return person;
    } else {
        throw new Error('Validation failed');
    }
};

export const validateName = (name: string) => {
    const nameFormat = /^(?=\S)(?!.*\d)[a-øA-Ø\sa.c-]+\s[a-øA-Ø\sa.c-]+$/;
    return validator.matches(name, nameFormat);
};

export const validateGender = (gender: string) => {
    return validator.equals(gender, 'male') || validator.equals(gender, 'female');
};