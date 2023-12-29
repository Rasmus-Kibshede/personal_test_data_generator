import 'dotenv/config'
import { connection } from '../../src/Repositories/data-source';
import { Car } from '../../src/Model/Vehicle';
import * as carService from '../../src/Services/carService'
import { Chassis } from '../../src/Model/Chassis';
import { Engine } from '../../src/Model/Engine';
import { FuelStats } from '../../src/Model/FuelStats';
import { Gearbox } from '../../src/Model/Gearbox';
import { Manufacturer } from '../../src/Model/Manufacturer';
import { Registration } from '../../src/Model/Registration';

let car: Car;
let cars: Car[];
let choice: number;


/* ---------------------------------------- generatecar ---------------------------------------- */
describe('generatecar', () => {

    beforeEach(async () => {
        const door = [3, 5]
        const result = await carService.generateCar();
        if(result.success)
        car = result.result.data as Car
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
/*
    test('Engine Horsepower is a positive number', () => {
        const horsepower = car.getEngine().getHP();
        expect(horsepower).toBeDefined();
        expect(horsepower).toBeGreaterThan(0);
    });

    test('Fuel Tank Size is a positive number', () => {
        const fuelTankSize = car.getFuel().getFuelTank();
        expect(fuelTankSize).toBeDefined();
        expect(fuelTankSize).toBeGreaterThan(0);
    });

    test('Manufacturer Year is a valid year', () => {
        const year = car.getManufacturer().getYear();
        const currentYear = new Date().getFullYear();
        expect(year).toBeDefined();
        expect(year).toBeGreaterThanOrEqual(2000); 
        expect(year).toBeLessThanOrEqual(currentYear);
    });

    test('Chassis Color is a string', () => {
        const color = car.getChassis().getColor();
        expect(color).toBeDefined();
        expect(typeof color).toBe('string');
    });

    test('Registration License Number is a string', () => {
        const licenseNumber = car.getRegistration().getLicenseNumber();
        expect(licenseNumber).toBeDefined();
        expect(typeof licenseNumber).toBe('string');
    });*/
});

/* ---------------------------------------- generateCars ---------------------------------------- */
//FLERE TEST
describe('generateCars', () => {

    beforeEach(() => {
        choice = 10;
        const result = carService.generateCars(10);
        if (result.success)
         cars = result.result.data as Car[]
        
    });
    
    test('Cars length same as choice', () => {
        expect(cars.length).toBe(choice);
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

/* ---------------------------------------- Car Setters ---------------------------------------- */

describe('Car Setters', () => {

    beforeEach(async () => {
        const door = [3, 5]
        const result = await carService.generateCar();
        if(result.success)
        car = result.result.data as Car
    });
  
    test('car setID',()=>{
      car.setVehicleId(-1);
      expect(car.getVehicleId()).toBe(-1);
    });
  
    test('car setDoor',()=>{
      car.setDoor(-1);
      expect(car.getDoor()).toBe(-1);
    });

    test('car setChassis',()=>{
        car.setChassis(cars[0].getChassis());
        expect(car.getChassis()).toBe(cars[0].getChassis());
      });
  });

