import { faker } from "@faker-js/faker";
import { Car } from "../Model/Vehicle";
import { generateEngine } from "./engineService";
import { generateManufacturer } from "./manufacturerService";
import { generateChassis } from "./chassisService";
import { generateRegistration } from "./registrationService";
import { generateGearbox } from "./gearboxService";
import { generateFuelStats } from "./fuelService";


export const generateCar = () => {
    const door = generateDoor();
    const car = new Car(generateManufacturer(), generateDoor(), 1, generateChassis(door), generateFuelStats(), generateRegistration(), generateEngine(), generateGearbox());
    return car
}

const generateDoor = () => {
    const doors = [3, 5]
    return doors[faker.number.int({ min: 0, max: 1 })]
}
