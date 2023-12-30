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


export const generateCar = async () => {
    try {
        const door = generateDoor();
        const car = new Car(await generateManufacturer(), door, -1, generateChassis(door), generateFuelStats(), generateRegistration(), generateEngine(), generateGearbox());
        const savedCar = await saveCar(car);
        return success(savedCar);
    } catch (error) {
        return failed(error)
    }
};

export const generateCars = (choice: number) => {
    if (!choice) {
        return failed(new Error('No cars generated.'))
    }

    if(choice >= 100 || choice <= 1){
        return failed(new Error('Only 1-100 cars allowed!'));
    }
    
    const cars: Car[] = [];
    Array.from({ length: choice }, async () => {
        const door = generateDoor();
        const car = new Car(await generateManufacturer(), door, -1, generateChassis(door), 
        generateFuelStats(), generateRegistration(), generateEngine(), generateGearbox());
        cars.push(car);
        car.setVehicleId(cars.length);
    });
    return success(cars);
};

export const getCarById = async (id: number) => {
    try {
        if(!id || typeof id !== 'number' ){
            failed(new Error('Not a valid id'))
        }
        return success(await carRepository.getCarById(id));
    } catch (error) {
        return failed(error)
    }
};

export const generateDoor = () => {
    const doors = [3, 5]
    return doors[faker.number.int({ min: 0, max: doors.length - 1 })]
};

export const saveCar = async (car: Car) => {
        const ids = await carRepository.saveCar(car);
        car.getChassis().setChassisId(Number(ids?.chassisId));
        car.getFuel().setFuelStatsId(Number(ids?.fuelId));
        car.getRegistration().setRegistrationId(Number(ids?.registrationId));
        car.getEngine().setEngineId(Number(ids?.engineId));
        car.getGear().setGearboxId(Number(ids?.gearboxId));
        car.setVehicleId(Number(ids?.vehicleId));
        car.getManufacturer().setManufacturerId(Number(ids?.manufacturerId));
        return car;
};
