import { faker } from '@faker-js/faker';
import { Manufacturer } from '../../src/Model/Manufacturer';
import * as manufacturerService from '../../src/Services/manufacturerService'
import { manufacturers } from '../../src/util/testDataProvider';

let manufacturer: Manufacturer;

/* ---------------------------------------- MOCKING API CALL ---------------------------------------- */
jest.spyOn(manufacturerService, 'generateManufacturer').mockImplementation(() => {
    return Promise.resolve(manufacturers[faker.number.int({ min: 0, max: manufacturers.length - 1 })])
});

/* ---------------------------------------- generateManufacturer ---------------------------------------- */
describe('generateManufacturer', () => {

    beforeEach(async () =>  {
        manufacturer = await manufacturerService.generateManufacturer();
    });

    test('Vehicle data is an object', () => {
        expect(typeof manufacturer).toBe('object');
    });

    test('Vehicle data is of type Manufacturer', () => {
        expect(manufacturer).toBeInstanceOf(Manufacturer);
    });

    test('Vehicle data is of type Manufacturer', () => {
        expect(manufacturers).toContainEqual(manufacturer);
    });
});

/* ---------------------------------------- generateManufacturer ID ---------------------------------------- */
describe('ID', () => {
    test('Manufacturer Id is not null', () => {
        expect(manufacturer.getManufacturerId()).not.toBeNull();
    });

    test('Manufacturer Id is not undefined', () => {
        expect(manufacturer.getManufacturerId()).not.toBeUndefined();
    });
});

/* ----------------------------------------generateManufacturer Make ---------------------------------------- */
describe('Make', () => {

    test('Make defined', () => {
        expect(manufacturer.getMake()).toBeDefined();
    });

    test('Make non-empty', () => {
        expect(manufacturer.getMake().trim()).not.toEqual('');
    });

    test('Make is not undefined', () => {
        expect(manufacturer.getMake()).toBeDefined();
    });

    test('Make is not null', () => {
            expect(manufacturer.getMake()).not.toBeNull();
    });
});

/* ----------------------------------------generateManufacturer Model ---------------------------------------- */
describe('Model', () => {

    test('Model property', () => {
        expect(typeof manufacturer.getModel()).toBe('string');
    });

    test('Model property', () => {
        expect(manufacturer).toHaveProperty('model');
    });

    test('Model non-empty', () => {
        expect(manufacturer.getModel().trim()).not.toEqual('');
    });

    test('Model non-empty', () => {
        expect(manufacturer.getModel()).toBeDefined();
    });

    test('Model is a string', () => {
        expect(typeof manufacturer.getModel()).toBe('string');
    });

    test('Model is not undefined', () => {
        expect(manufacturer.getModel()).toBeDefined();
    });

    test('Model is not null', () => {
            expect(manufacturer.getModel()).not.toBeNull();
    });
});


/* ----------------------------------------generateManufacturer Year ---------------------------------------- */
describe('Year', () => {

    test('Year to be number', () => {
        expect(typeof manufacturer.getYear()).toBe('number');
    });

    test('Year is not undefined', () => {
        expect(manufacturer.getYear()).toBeDefined();
    });

    test('Year is not null', () => {
            expect(manufacturer.getYear()).not.toBeNull();
    });
});
