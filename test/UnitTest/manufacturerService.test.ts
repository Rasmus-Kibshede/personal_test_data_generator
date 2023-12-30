import { Manufacturer } from '../../src/Model/Manufacturer';
import * as manufacturerService from '../../src/Services/manufacturerService'


/* ---------------------------------------- generateVehicleData ---------------------------------------- */

describe('generateVehicleData', () => {

    let result: Manufacturer;

    beforeEach(async () => {
        result = await manufacturerService.generateManufacturer();
    });

    test('Vehicle data is an object', () => {
        expect(typeof result).toBe('object');
    });

    test('Vehicle data has make property', () => {
        expect(result).toHaveProperty('make');
        expect(typeof result.getMake()).toBe('string');
    });

    test('Vehicle data has model property', () => {
        expect(result).toHaveProperty('model');
        expect(typeof result.getModel()).toBe('string');
    });

    test('Vehicle data has year property', () => {
        expect(result).toHaveProperty('year');
        expect(typeof result.getYear()).toBe('number');
    });

    test('Vehicle data has valid year', () => {
        const currentYear = new Date().getFullYear();
        expect(result.getYear()).toBeGreaterThanOrEqual(2000);
        expect(result.getYear()).toBeLessThanOrEqual(currentYear);
    });

    test('Vehicle data model is a string', () => {
        expect(typeof result.getModel()).toBe('string');
    });

    test('Vehicle data make is not null or undefined', () => {
        expect(result.getMake()).not.toBeNull();
        expect(result.getMake()).not.toBeUndefined();
    });

    test('Vehicle data model is not null or undefined', () => {
        expect(result.getModel()).not.toBeNull();
        expect(result.getModel()).not.toBeUndefined();
    });

    test('Make greater or equal to 3', async () => {
        expect(result.getMake().length).toBeGreaterThanOrEqual(3);
    });

    test('Make less or equal to 13', async () => {
        expect(result.getMake().length).toBeLessThanOrEqual(13);
    });

    test('Model greater or equal to 2', async () => {
        expect(result.getModel().length).toBeGreaterThanOrEqual(2);
    });

    test('Model less or equal to 7', async () => {
        expect(result.getModel().length).toBeLessThanOrEqual(7);
    });
});
