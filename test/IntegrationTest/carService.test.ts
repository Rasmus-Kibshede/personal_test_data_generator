import 'dotenv/config'
import { connection } from '../../src/Repositories/data-source';
import { Car } from '../../src/Model/Vehicle';
import * as carService from '../../src/Services/carService'

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

    test('car instanceOf car', () => {
        expect(car).toBeInstanceOf(Car);
    });

    test('car has id', () => {
        expect(car.getVehicleId()).toBeDefined();
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

    test('car not null or undefined', () => {
        expect(car).not.toBeNull();
        expect(car).not.toBeUndefined();
    });

    test('carId not null or undefined', () => {
        expect(car.getVehicleId()).not.toBeNull();
        expect(car.getVehicleId()).not.toBeUndefined();
    });

    test('Capacity not null or undefined', () => {
        expect(car.getChassis()).not.toBeNull();
        expect(car.getChassis()).not.toBeUndefined();
    });

    test('Color not null or undefined', () => {
        expect(car.getDoor()).not.toBeNull();
        expect(car.getDoor()).not.toBeUndefined();
    });

    test('Color not null or undefined', () => {
        expect(car.getEngine()).not.toBeNull();
        expect(car.getEngine()).not.toBeUndefined();
    });

    test('Color not null or undefined', () => {
        expect(car.getFuel()).not.toBeNull();
        expect(car.getFuel()).not.toBeUndefined();
    });

    test('Color not null or undefined', () => {
        expect(car.getGear()).not.toBeNull();
        expect(car.getGear()).not.toBeUndefined();
    });

    test('Color not null or undefined', () => {
        expect(car.getManufacturer()).not.toBeNull();
        expect(car.getManufacturer()).not.toBeUndefined();
    });

    test('Color not null or undefined', () => {
        expect(car.getRegistration()).not.toBeNull();
        expect(car.getRegistration()).not.toBeUndefined();
    });

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
    });
});

/* ---------------------------------------- generateCars ---------------------------------------- */

describe('generateCars', () => {

    beforeEach(() => {
        choice = 10;
        const result = carService.generateCars(10);
        if (result.success)
         cars = result.result.data as Car[]
        
    });
    
    test('Color not null or undefined', () => {
        expect(cars.length).toBe(choice);
    });
});

/* ---------------------------------------- Get Car by ID ---------------------------------------- */

describe('GetCarByID success', () => {

    test('Color not null or undefined', async () => {
        const test = await carService.getCarById(1);
        expect(test.success).toBe(true);
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

