import { faker } from "@faker-js/faker"
import { FuelStats } from "../Model/FuelStats"

export const generateFuelStats = () => {
    const fuel = new FuelStats(1, generateFuelTank(), generateRange())
    return fuel
}

export const generateRange = () => {
    return faker.number.int({ min: 350, max: 900 })
}

export const generateFuelTank = () => {
    return faker.number.int({ min: 45, max: 65 })
}