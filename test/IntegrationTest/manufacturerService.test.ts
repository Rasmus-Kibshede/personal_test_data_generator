import { Manufacturer } from '../../src/Model/Manufacturer';
import * as manufacturerService from '../../src/Services/manufacturerService'

const expectedMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai'];
const expectedModels = ['Camry', 'Accord', 'Mustang', 'Malibu', 'Model 3', 'X5', 'C-Class', 'A4', 'Altima', 'Elantra'];
const yearsList = [2000, 2002, 2005, 2008, 2010, 2012, 2015, 2017, 2020, 2022];


let manufacturer: Manufacturer

/* ---------------------------------------- generateManufacturer ---------------------------------------- */
//TODO SKal laves om i service laget så den retunere datasæt i stedet for vores Manufacturer object, så vi kan lave unittest på den. 
//DUBLICATE af Unit Test. Hvor skal de være? 
describe('generateManufacturer', () => {

    beforeEach(() => {
        manufacturer = manufacturerService.generateManufacturer();
    });

    test('Vehicle data is an object', () => {
        expect(typeof manufacturer).toBe('object');
    });

    test('Vehicle data is of type Manufacturer', () => {
        expect(manufacturer).toBeInstanceOf(Manufacturer)
    });
});

/* ---------------------------------------- generateManufacturer ID ---------------------------------------- */
describe('ID', () => {

    test('Manufacturer has id', () => {
        expect(manufacturer.getManufacturerId()).toBeDefined();
        expect(manufacturer.getManufacturerId()).toBe(-1);
    });


    test('Manufacturer Id is not null or undefined', () => {
        expect(manufacturer.getManufacturerId()).not.toBeNull();
        expect(manufacturer.getManufacturerId()).not.toBeUndefined();
    });

    test('Manufacturer Id is a valid integer', () => {
        expect(Number.isInteger(manufacturer.getManufacturerId())).toBe(true);
    });

    test('Manufacturer Id is initialized to -1', () => {
        expect(manufacturer.getManufacturerId()).toBe(-1);
    });

});

/* ----------------------------------------generateManufacturer Make ---------------------------------------- */
describe('Make', () => {

    test('Make is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getMake().trim()).toEqual(manufacturer.getMake());
    });

    test('Make contains only alphanumeric characters', () => {
        expect(manufacturer.getMake()).toMatch(/^[a-zA-Z0-9-]+$/);
    });

    test('Make data has make property', () => {
        expect(manufacturer).toHaveProperty('make');
        expect(typeof manufacturer.getMake()).toBe('string');
    });

    test('Make non-empty', () => {
        const make = manufacturer.getMake();
        expect(make).toBeDefined();
        expect(make.trim()).not.toEqual('');
    });

    test('Make is in the expected list', () => {
        expect(expectedMakes).toContain(manufacturer.getMake());
    });

    test('Make is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getMake().trim()).toEqual(manufacturer.getMake());
    });

    test('Make is not undefined', () => {
        expect(manufacturer.getMake()).toBeDefined();
    });

    test('Make is not null', () => {
            expect(manufacturer.getMake()).not.toBeNull();
    });

    test('Make greater or equal to 3', () => {
        expect(manufacturer.getMake().length).toBeGreaterThanOrEqual(3);
    });

    test('Make less or equal to 13', () => {
        expect(manufacturer.getMake().length).toBeLessThanOrEqual(13);
    });

    test('Make not equal 2', () => {
        expect(manufacturer.getMake().length).not.toBe(2);
    });

    test('Make not equal 10', () => {
        expect(manufacturer.getMake().length).not.toBe(14);
    });
});

/* ----------------------------------------generateManufacturer Model ---------------------------------------- */
describe('Model', () => {

    test('Model is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getModel().trim()).toEqual(manufacturer.getModel());
    });

    test('Model contains only alphanumeric characters', () => {
        expect(manufacturer.getModel()).toMatch(/^[a-zA-Z0-9\s-]+$/);
    });

    test('Model property', () => {
        expect(manufacturer).toHaveProperty('model');
        expect(typeof manufacturer.getModel()).toBe('string');
    });

    test('Model non-empty', () => {
        expect(manufacturer.getModel().trim()).not.toEqual('');
    });

    test('Model non-empty', () => {
        expect(manufacturer.getModel()).toBeDefined();
    });

    test('Model is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getModel().trim()).toEqual(manufacturer.getModel());
    });

    test('Model greater or equal to 2', () => {
        expect(manufacturer.getModel().length).toBeGreaterThanOrEqual(2);
    });

    test('Model less or equal to 7', () => {
        expect(manufacturer.getModel().length).toBeLessThanOrEqual(7);
    });

    test('Model not equal 1', () => {
        expect(manufacturer.getModel().length).not.toBe(1)
    });

    test('Model not equal 8', () => {
        expect(manufacturer.getModel().length).not.toBe(8);
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

    test('Model is in expected list', () => {
        expect(expectedModels).toContain(manufacturer.getModel());
    });
});


/* ----------------------------------------generateManufacturer Year ---------------------------------------- */
describe('Year', () => {

    test('Manufacturer have property', () => {
        expect(manufacturer).toHaveProperty('year');
    });

    test('Year to be number', () => {
        expect(typeof manufacturer.getYear()).toBe('number');
    });

    test('valid year upper', () => {
        const currentYear = new Date().getFullYear();
        expect(manufacturer.getYear()).toBeLessThanOrEqual(currentYear);
    });

    test('valid year lower', () => {
        expect(manufacturer.getYear()).toBeGreaterThanOrEqual(2000);
    });

    test('Year is not undefined', () => {
        expect(manufacturer.getYear()).toBeDefined();
    });

    test('Year is not null', () => {
            expect(manufacturer.getYear()).not.toBeNull();
    });

    test('Year is a valid integer', () => {
        expect(Number.isInteger(manufacturer.getYear())).toBe(true);
    });
});

/* ---------------------------------------- Manufacturer setters ---------------------------------------- */

describe('manufacturer Setters', () => {

    beforeEach(() => {
        manufacturer = manufacturerService.generateManufacturer();
    });

    test('manufacturer setID', () => {
        manufacturer.setManufacturerId(-1);
        expect(manufacturer.getManufacturerId()).toBe(-1);
    });

    test('manufacturer setMake', () => {
        manufacturer.setMake('test');
        expect(manufacturer.getMake()).toBe('test');
    });

    test('manufacturer setYear', () => {
        manufacturer.setYear(-1);
        expect(manufacturer.getYear()).toBe(-1);
    });

    test('manufacturer setModel', () => {
        manufacturer.setModel('test');
        expect(manufacturer.getModel()).toBe('test');
    });
});
