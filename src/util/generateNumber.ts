import { faker } from "@faker-js/faker"

export const generaterandomNumber = (min: number, max: number) => {
    return faker.number.int({ min: min, max: max })
}