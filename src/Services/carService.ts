import { faker } from "@faker-js/faker";
import { Car } from "../Model/Vehicle";
import { generateEngine } from "./engineService";
import { generateManufacturer } from "./manufacturerService";
import { generateChassis } from "./chassisService";
import { generateRegistration } from "./registrationService";
import { generateGearbox } from "./gearboxService";
import { generateFuelStats } from "./fuelService";
import { failed, success } from "../util/errorHandler";
import * as carRepository from '../Repositories/carRepository';


export const generateCar = () => {
        const door = generateDoor();
        const car = new Car(generateManufacturer(), generateDoor(), 1, generateChassis(door), generateFuelStats(), generateRegistration(), generateEngine(), generateGearbox());
       // const savedCar = saveCar(car);
       return success(car);
        //Ingen try catch da den ikke kalder databasen. 
        //Hvor vil vi hente fra DB og hvor vil vi genererer? 
};

//Virker ikke da insert ikke er lavet færdig i nu
const saveCar = async (car: Car) => {
    try {
        const savedCar = await carRepository.saveCar(car);
        return success(savedCar);
    } catch (error) {
        //Quick fix
        failed(error as Error);
    }
};

const generateDoor = () => {
    const doors = [3, 5]
    return doors[faker.number.int({ min: 0, max: doors.length -1 })]
};
