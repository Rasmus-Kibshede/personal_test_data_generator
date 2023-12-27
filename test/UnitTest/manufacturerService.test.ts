import { Manufacturer } from '../../src/Model/Manufacturer';
import * as manufacturerService from '../../src/Services/manufacturerService'

let vehicleData: Manufacturer;
const expectedMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai'];
const shortestMake = expectedMakes.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
});
const longestMake = expectedMakes.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    });
const expectedModels = ['Camry', 'Accord', 'Mustang', 'Malibu', 'Model 3', 'X5', 'C-Class', 'A4', 'Altima', 'Elantra'];
const shortestModel = expectedModels.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
});
const longestModel = expectedModels.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    });





/* ---------------------------------------- generateManufacturer ---------------------------------------- */

describe('generateManufacturer', () => {

    beforeEach(() => {
        vehicleData = manufacturerService.generateManufacturer();
    });

    test('Vehicle data is an object', () => {
        expect(typeof vehicleData).toBe('object');
    });

    test('Vehicle data is of type Manufacturer', () => {
        expect(vehicleData).toBeInstanceOf(Manufacturer)
    });

    test('Vehicle data has make property', () => {
        expect(vehicleData).toHaveProperty('make');
        expect(typeof vehicleData.getMake()).toBe('string');
    });

    test('Vehicle data has model property', () => {
        expect(vehicleData).toHaveProperty('model');
        expect(typeof vehicleData.getModel()).toBe('string');
    });

    test('Vehicle data has year property', () => {
        expect(vehicleData).toHaveProperty('year');
        expect(typeof vehicleData.getYear()).toBe('number');
    });

    test('Vehicle data has valid year', () => {
        const currentYear = new Date().getFullYear();
        expect(vehicleData.getYear()).toBeGreaterThanOrEqual(2000);
        expect(vehicleData.getYear()).toBeLessThanOrEqual(currentYear);
    });

    test('Vehicle make is in the expected list', () => {
        expect(expectedMakes).toContain(vehicleData.getMake());
    });

    test('Vehicle model is in expected list', () => {
        expect(expectedModels).toContain(vehicleData.getModel());
    });

    test('Vehicle data model is a string', () => {
        expect(typeof vehicleData.getModel()).toBe('string');
    });

    test('Vehicle data make is not null or undefined', () => {
        expect(vehicleData.getMake()).not.toBeNull();
        expect(vehicleData.getMake()).not.toBeUndefined();
    });

    test('Vehicle data model is not null or undefined', () => {
        expect(vehicleData.getModel()).not.toBeNull();
        expect(vehicleData.getModel()).not.toBeUndefined();
    });

    test('Vehicle data does not have duplicate makes', () => {
        const makes = new Set();
        for (let i = 0; i < 100; i++) {
            const manufacturer = manufacturerService.generateManufacturer()
            makes.add(manufacturer.getMake());
        }
        expect(makes.size).toBe(expectedMakes.length);
    });

    test('Vehicle data does not have duplicate models', () => {
        const models = new Set();
        for (let i = 0; i < 100; i++) {
            const manufacturer = manufacturerService.generateManufacturer()
            models.add(manufacturer.getModel());
        }
        expect(models.size).toBe(expectedModels.length);
    });
    
    test('Make greater or equal to 3', async () => {
        expect(shortestMake.length).toBeGreaterThanOrEqual(3);
    });

    test('Make less or equal to 9', async () => {
        expect(longestMake.length).toBeLessThanOrEqual(13);
    });

    test('Make not equal 2', async () => {
        expect(shortestMake.length).not.toBe(2);
    });

    test('Make not equal 10', async () => {
        expect(longestMake.length).not.toBe(14);
    });

    test('Model greater or equal to 2', async () => {
        expect(shortestModel.length).toBeGreaterThanOrEqual(2);
    });

    test('Model less or equal to 7', async () => {
        expect(longestModel.length).toBeLessThanOrEqual(7);
    });

    test('Model not equal 1', async () => {
        expect(shortestModel.length).not.toBe(1)
    });

    test('Model not equal 8', async () => {
        expect(longestModel.length).not.toBe(8);
    });
    
    test('Manufacturer has id', () => {
        expect(vehicleData.getManufacturerId()).toBeDefined();
        expect(vehicleData.getManufacturerId()).toBe(-1);
    });
});
