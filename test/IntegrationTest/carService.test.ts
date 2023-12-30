import 'dotenv/config'
import { connection } from '../../src/Repositories/data-source';
import { Car } from '../../src/Model/Vehicle';
import * as carService from '../../src/Services/carService'
import * as manufacturerService from '../../src/Services/manufacturerService'
import { Chassis } from '../../src/Model/Chassis';
import { Engine } from '../../src/Model/Engine';
import { FuelStats } from '../../src/Model/FuelStats';
import { Gearbox } from '../../src/Model/Gearbox';
import { Manufacturer } from '../../src/Model/Manufacturer';
import { Registration } from '../../src/Model/Registration';

let car: Car;
let cars: Car[];
let choice: number;

/* ---------------------------------------- MOCKING API CALL ---------------------------------------- */
//TODO ADD MORE MANUFACTURES
jest.spyOn(manufacturerService, 'generateManufacturer').mockImplementation(() => {
    return Promise.resolve(new Manufacturer(2000, 'Audi', 'S7 quattro', 2010))
    });

 /* ---------------------------------------- MOCKING DB CALL ---------------------------------------- */ 
 //TODO ADD MORE VEHICLES  
jest.spyOn(carService, 'saveCar').mockImplementation(async () => {
return Promise.resolve(new Car(await manufacturerService.generateManufacturer(), 4, 2000, new Chassis(2000, 'red', 4, 5), new FuelStats(2000, 50, 600), 
new Registration(2000, 'test', 'test'), new Engine(2000, 'test', 600, 800, 'test'), new Gearbox(2000, 'test', 7, 'test')))
});



/* ---------------------------------------- generatecar ---------------------------------------- */
describe('generatecar', () => {

    beforeEach(async () => {
        const result = await carService.generateCar();
        if (result.success)
            car = result.result.data as Car
        console.log(car);
    });

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
describe('generateCars', () => {

    test('Below 100 cars', () => {
        choice = 10;
        const result = carService.generateCars(choice);
        expect(result.success).toBe(true);
    });

    test('Above 100 cars', () => {
        choice = 101;
        const result = carService.generateCars(choice);
        expect(result.success).toBe(false);
    });

    test('Choice not a num', () => {
        const result = carService.generateCars(Number('abc'));
        expect(result.success).toBe(false);
    });
});

/* ---------------------------------------- Get Car by ID ---------------------------------------- */
//FLERE TEST
describe('GetCarByID success', () => {

    test('car by id successful', async () => {
        const result = await carService.getCarById(1);
        expect(result.success).toBe(true);
    });
});

afterAll(() => {
    connection.end();
});