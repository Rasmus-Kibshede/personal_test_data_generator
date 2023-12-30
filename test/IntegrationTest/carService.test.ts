import { Car } from '../../src/Model/Vehicle';
import * as carService from '../../src/Services/carService'
import * as manufacturerService from '../../src/Services/manufacturerService'
import * as carRepository from '../../src/Repositories/carRepository'
import { Chassis } from '../../src/Model/Chassis';
import { Engine } from '../../src/Model/Engine';
import { FuelStats } from '../../src/Model/FuelStats';
import { Gearbox } from '../../src/Model/Gearbox';
import { Manufacturer } from '../../src/Model/Manufacturer';
import { Registration } from '../../src/Model/Registration';
import { faker, } from '@faker-js/faker';
import { Result } from '../../src/Model/Types/types';
import { manufacturers } from '../../src/util/testDataProvider';

let car: Car;
let choice: number;
let cars: Car[]

/* ---------------------------------------- MOCKING DB CALL ---------------------------------------- */
jest.spyOn(carRepository, 'saveCar').mockImplementation(() => {
    return Promise.resolve({ chassisId: 4000, fuelId: 4000, registrationId: 4000, engineId: 4000, gearboxId: 4000, vehicleId: 4000, manufacturerId: 4000 })
});

/* ---------------------------------------- MOCKING DB CALL ---------------------------------------- */
jest.spyOn(carRepository, 'getCarById').mockImplementation(async (id: number) => {
    return Promise.resolve(new Car(await manufacturerService.generateManufacturer(), 4, id, new Chassis(4000, 'red', 4, 5), new FuelStats(4000, 50, 600),
        new Registration(4000, 'test', 'test'), new Engine(4000, 'test', 600, 800, 'test'), new Gearbox(4000, 'test', 7, 'test')))
});
//HER KAN VI MOCKE EN DER FEJLER!

/* ---------------------------------------- MOCKING API CALL ---------------------------------------- */
jest.spyOn(manufacturerService, 'generateManufacturer').mockImplementation(() => {
    return Promise.resolve(manufacturers[faker.number.int({ min: 0, max: manufacturers.length - 1 })])
});


/* ---------------------------------------- generatecar ---------------------------------------- */
describe('generatecar', () => {

    beforeEach(async () => {
        const test: Result = await carService.generateCar();
        car = test.result!.data as Car
    });

    test('car is an object', async () => {
        const result = await carService.generateCar();
        expect(result.success).toBe(true)
    })

    test('car is an object', () => {
        expect(typeof car).toBe('object')
    })

    test('car instanceOf Car', () => {
        expect(car).toBeInstanceOf(Car);
    });

    test('Chassis is an object', () => {
        expect(typeof car.getChassis()).toBe('object')
    })

    test('Chassis instanceOf Chassis', () => {
        expect(car.getChassis()).toBeInstanceOf(Chassis);
    });

    test('Engine is an object', () => {
        expect(typeof car.getEngine()).toBe('object')
    })

    test('Engine instanceOf Engine', () => {
        expect(car.getEngine()).toBeInstanceOf(Engine);
    });

    test('Fuel is an object', () => {
        expect(typeof car.getFuel()).toBe('object')
    })

    test('Fuel instanceOf Fuel', () => {
        expect(car.getFuel()).toBeInstanceOf(FuelStats);
    });

    test('Gearbox is an object', () => {
        expect(typeof car.getGear()).toBe('object')
    })

    test('Gearbox instanceOf Gearbox', () => {
        expect(car.getGear()).toBeInstanceOf(Gearbox);
    });

    test('Manufacturer is an object', () => {
        expect(typeof car.getManufacturer()).toBe('object')
    })

    test('Manufacturer instanceOf Manufacturer', () => {
        expect(car.getManufacturer()).toBeInstanceOf(Manufacturer);
    });

    test('Registration is an object', () => {
        expect(typeof car.getRegistration()).toBe('object')
    })

    test('Registration instanceOf Registration', () => {
        expect(car.getRegistration()).toBeInstanceOf(Registration);
    });

    test('carId not undefined', () => {
        expect(car.getVehicleId()).toBeDefined();
    });

    test('carId not null', () => {
        expect(car.getVehicleId()).not.toBeNull();
    });

    test('carId greater then -1', () => {
        expect(car.getVehicleId()).toBeGreaterThan(-1);
    });

    test('carId not -1', () => {
        expect(car.getVehicleId()).not.toBe(-1);
    });

    test('carId not 0', () => {
        expect(car.getVehicleId()).not.toBe(0);
    });

    test('Car not null', () => {
        expect(car).not.toBeNull();
    });

    test('Car not undefined', () => {
        expect(car).not.toBeUndefined();
    });

    test('Chassis not undefined', () => {
        expect(car.getChassis()).toBeDefined();
    });

    test('Chassis not null', () => {
        expect(car.getChassis()).not.toBeNull();
    });

    test('Doors not undefined', () => {
        expect(car.getDoor()).toBeDefined();
    });

    test('Doors not null', () => {
        expect(car.getDoor()).not.toBeNull();
    });

    test('Engine not undefined', () => {
        expect(car.getEngine()).toBeDefined();
    });

    test('Engine not null', () => {
        expect(car.getEngine()).not.toBeNull();
    });

    test('Fuel not undefined', () => {
        expect(car.getFuel()).toBeDefined();
    });

    test('Fuel not null', () => {
        expect(car.getFuel()).not.toBeNull();
    });

    test('Gearbox not undefined', () => {
        expect(car.getGear()).toBeDefined();
    });

    test('Gearbox not null', () => {
        expect(car.getGear()).not.toBeNull();
    });

    test('Manufacture not undefined', () => {
        expect(car.getManufacturer()).toBeDefined();
    });

    test('Manufacturer not null', () => {
        expect(car.getManufacturer()).not.toBeNull();
    });

    test('Registration not undefined', () => {
        expect(car.getRegistration()).toBeDefined();
    });

    test('Registratin not null', () => {
        expect(car.getRegistration()).not.toBeNull();
    });
});

/* ---------------------------------------- generateCars ---------------------------------------- */
//FLERE TEST
describe('generateCars', () => { });

const generatedCars = [{ choice: 1, expected: 1 }, { choice: 100, expected: 100 }, { choice: 50, expected: 50 }];

test.each(generatedCars)('GenerateCars blackbox', async ({ choice, expected }) => {
    const result: Result = await carService.generateCars(choice);
    cars = result.result?.data as Car[];
    expect(cars.length).toBe(expected);
});
const error = new Error('Only 1-100 cars allowed!')
const invalidError = new Error('No cars generated.');

const invalidCars = [
    { choice: 0, expected: error },
    { choice: -1, expected: error },
    { choice: 101, expected: error  },
    { choice: Number('a'), expected: error },
    { choice: Number('&'), expected: error  },
    { choice: Number(true), expected: error  },
    { choice: Number(false), expected: error  },
    { choice: Number(null), expected: error  },
    { choice: Number(undefined), expected: error  },
    { choice: Number([]), expected: error  },
    { choice: Number({}), expected: error  },
];

test.each(invalidCars)('Only between 1-100 cars allowed', ({ choice, expected }) => {
    expect(() => carService.generateCars(choice)).toThrowError(expected);
});


test('Below 100 cars', async () => {
    choice = 10;
    const result = await carService.generateCars(choice);
    expect(result.success).toBe(true);
});

test('Above 100 cars', async () => {
    choice = 101;
    const result = await carService.generateCars(choice);
    expect(result.success).toBe(false);
});

test('Choice not a num', async () => {
    const result = await carService.generateCars(Number('abc'));
    expect(result.success).toBe(false);
});

/* ---------------------------------------- Get Car by ID ---------------------------------------- */
//FLERE TEST
//SKAL Mockes
describe('GetCarByID success', () => {

    test('car by id successful', async () => {
        const result = await carService.getCarById(1);
        expect(result.success).toBe(true);
    });
});


/* ---------------------------------------- MOCKING DB CALL ---------------------------------------- */
//HVIS DENNE MOCKES SÅ FÅR VI DEN SAMME BIL HVER GANG!
/*jest.spyOn(carService, 'saveCar').mockImplementation(async () => {
    return Promise.resolve(
        new Car(await manufacturerService.generateManufacturer(), 4, 2000, new Chassis(2000, 'red', 4, 5), new FuelStats(2000, 50, 600),
        new Registration(2000, 'test', 'test'), new Engine(2000, 'test', 600, 800, 'test'), new Gearbox(2000, 'test', 7, 'test')))
});
*/