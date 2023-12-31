import { faker } from "@faker-js/faker"

export const generateRandomNumber = (min: number, max: number) => {
    return faker.number.int({ min: min, max: max })
}