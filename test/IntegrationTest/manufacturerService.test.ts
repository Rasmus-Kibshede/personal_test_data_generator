import { faker } from '@faker-js/faker';
import { Manufacturer } from '../../src/Model/Manufacturer';
import * as manufacturerService from '../../src/Services/manufacturerService'

let manufacturer: Manufacturer;

//I en PrepMappe/fil som vi kan hente ud. ect. Util til at starte med. 
const manufacturers = [
    new Manufacturer(-1, 'Audi', 'A5', 2002), new Manufacturer(-1, 'BMW', 'X3', 2010),
    new Manufacturer(-1, 'Mercedes-Benz', 'C-Class', 2015), new Manufacturer(-1, 'Toyota', 'Camry', 2005),
    new Manufacturer(-1, 'Ford', 'Fusion', 2018), new Manufacturer(-1, 'Chevrolet', 'Malibu', 2012),
    new Manufacturer(-1, 'Tesla', 'Model S', 2020), new Manufacturer(-1, 'Nissan', 'Altima', 2016),
    new Manufacturer(-1, 'Hyundai', 'Elantra', 2014), new Manufacturer(-1, 'Honda', 'Civic', 2003),
    new Manufacturer(-1, 'Volkswagen', 'Passat', 2008), new Manufacturer(-1, 'Subaru', 'Impreza', 2019),
    new Manufacturer(-1, 'Lexus', 'ES', 2022), new Manufacturer(-1, 'Kia', 'Optima', 2013),
    new Manufacturer(-1, 'Mazda', 'Mazda3', 2011), new Manufacturer(-1, 'Jeep', 'Cherokee', 2017),
    new Manufacturer(-1, 'Ram', '1500', 2021), new Manufacturer(-1, 'Audi', 'Q7', 2010),
    new Manufacturer(-1, 'BMW', 'X5', 2015), new Manufacturer(-1, 'Mercedes-Benz', 'E-Class', 2016),
    new Manufacturer(-1, 'Toyota', 'Corolla', 2007), new Manufacturer(-1, 'Ford', 'Escape', 2014),
    new Manufacturer(-1, 'Chevrolet', 'Equinox', 2018), new Manufacturer(-1, 'Tesla', 'Model Y', 2022),
    new Manufacturer(-1, 'Nissan', 'Rogue', 2019), new Manufacturer(-1, 'Hyundai', 'Tucson', 2009),
    new Manufacturer(-1, 'Honda', 'Pilot', 2017), new Manufacturer(-1, 'Volkswagen', 'Tiguan', 2013),
    new Manufacturer(-1, 'Subaru', 'Outback', 2016), new Manufacturer(-1, 'Lexus', 'RX', 2021),
    new Manufacturer(-1, 'Kia', 'Sorento', 2012), new Manufacturer(-1, 'Mazda', 'CX-5', 2014),
    new Manufacturer(-1, 'Jeep', 'Grand Cherokee', 2011), new Manufacturer(-1, 'Ram', '2500', 2020),
    new Manufacturer(-1, 'Audi', 'Q5', 2018), new Manufacturer(-1, 'BMW', 'X1', 2019),
    new Manufacturer(-1, 'Mercedes-Benz', 'GLC', 2017), new Manufacturer(-1, 'Toyota', 'Highlander', 2006),
];


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

    test('Manufacturer has id', () => {
        expect(manufacturer.getManufacturerId()).toBeDefined();
        expect(manufacturer.getManufacturerId()).toBe(-1);
    });

    test('Manufacturer Id is not null', () => {
        expect(manufacturer.getManufacturerId()).not.toBeNull();
    });

    test('Manufacturer Id is not undefined', () => {
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

    test('Make defined', () => {
        expect(manufacturer.getMake()).toBeDefined();
    });

    test('Make non-empty', () => {
        expect(manufacturer.getMake().trim()).not.toEqual('');
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
    
    test('Model less or equal to 14', () => {
        expect(manufacturer.getModel().length).toBeLessThanOrEqual(14);
    });

    test('Model not equal 1', () => {
        expect(manufacturer.getModel().length).not.toBe(1)
    });

    test('Model not equal 8', () => {
        expect(manufacturer.getModel().length).not.toBe(15);
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

/* ----------------------------------------fakeFetchManufacturer ---------------------------------------- */
describe('fakeFetchManufacturer', () => {

    beforeEach(async () =>  {
         manufacturer = manufacturerService.fakeFetchManufacturer();
    });

    test('Manufacturer is expected', () => {
        expect(manufacturers).toContainEqual(manufacturer);
    });

    test('Manufacturer is expected', () => {
        expect(typeof manufacturer).toBe('object')
    });

    test('Manufacturer is expected', () => {
        expect(manufacturer).toBeInstanceOf(Manufacturer)
    });
});
