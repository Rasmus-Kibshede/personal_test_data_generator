import 'dotenv/config'
import { connection } from '../../src/Repositories/data-source';
import { Car } from '../../src/Model/Vehicle';
import * as carService from '../../src/Services/carService'

//let car: Car;

let car: Car;
let cars: Car[];
let choice: number;


/* ---------------------------------------- generatecar ---------------------------------------- */
describe('generatecar', () => {

    beforeEach(async () => {
        const door = [3, 5]
        car = await carService.generateCar() as unknown as Car;
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

    test('carId greater then -1', () => {
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
});

/* ---------------------------------------- generateCars ---------------------------------------- */

describe('generatecars', () => {

    beforeEach(() => {
        choice = 10;
        cars = carService.generateCars(10);
    });

    test('Color not null or undefined', () => {
        expect(cars.length).toBe(choice);
        
    });
});

describe('generatecars', () => {

    test('Color not null or undefined', () => {
        car = carService.getCarById(1) as unknown as Car;
        expect(typeof car.getVehicleId()).toBe('number');
        
    });
});

afterAll(() => {
    connection.end();
})

