import { Manufacturer } from '../../src/Model/Manufacturer';
import * as manufacturerService from '../../src/Services/manufacturerService'

const expectedMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai'];
const expectedModels = ['Camry', 'Accord', 'Mustang', 'Malibu', 'Model 3', 'X5', 'C-Class', 'A4', 'Altima', 'Elantra'];

const yearsList = [2000, 2002, 2005, 2008, 2010, 2012, 2015, 2017, 2020, 2022];

const dataProvider = expectedMakes.map((make, index) => ({
    vehicleData: (new Manufacturer(-1, make, expectedModels[index], yearsList[index])
    )
}));

/* ---------------------------------------- generateManufacturer ---------------------------------------- */
//TODO SKal laves om i service laget så den retunere datasæt i stedet for vores Manufacturer object, så vi kan lave unittest på den. 
describe('generateManufacturer', () => {

    test.each(dataProvider)('Vehicle data is an object', ({ vehicleData }) => {
        expect(typeof vehicleData).toBe('object');
    });

    test.each(dataProvider)('Vehicle is a string with no leading or trailing whitespaces', ({ vehicleData }) => {
        expect(vehicleData.getMake().trim()).toEqual(vehicleData.getMake());
    });

    test.each(dataProvider)('Vehicle is a string with no leading or trailing whitespaces', ({ vehicleData }) => {
        expect(vehicleData.getModel().trim()).toEqual(vehicleData.getModel());
    });

    test.each(dataProvider)('Vehicle contains only alphanumeric characters', ({ vehicleData }) => {
        expect(vehicleData.getMake()).toMatch(/^[a-zA-Z0-9-]+$/);
    });

    test.each(dataProvider)('Vehicle contains only alphanumeric characters', ({ vehicleData }) => {
        expect(vehicleData.getModel()).toMatch(/^[a-zA-Z0-9\s-]+$/);
    });

    test.each(dataProvider)('Vehicle data is of type Manufacturer', ({ vehicleData }) => {
        expect(vehicleData).toBeInstanceOf(Manufacturer)
    });

    test.each(dataProvider)('Vehicle data has make property', ({ vehicleData }) => {
        expect(vehicleData).toHaveProperty('make');
        expect(typeof vehicleData.getMake()).toBe('string');
    });

    test.each(dataProvider)('Vehicle data has model property', ({ vehicleData }) => {
        expect(vehicleData).toHaveProperty('model');
        expect(typeof vehicleData.getModel()).toBe('string');
    });

    test.each(dataProvider)('Vehicle data has year property', ({ vehicleData }) => {
        expect(vehicleData).toHaveProperty('year');
        expect(typeof vehicleData.getYear()).toBe('number');
    });

    test.each(dataProvider)('Make is a string with no leading or trailing whitespaces', ({ vehicleData }) => {
        expect(vehicleData.getMake().trim()).toEqual(vehicleData.getMake());
    });

    test.each(dataProvider)('Model is a string with no leading or trailing whitespaces', ({ vehicleData }) => {
        expect(vehicleData.getModel().trim()).toEqual(vehicleData.getModel());
    });

    test.each(dataProvider)('Vehicle data has valid year', ({ vehicleData }) => {
        const currentYear = new Date().getFullYear();
        expect(vehicleData.getYear()).toBeGreaterThanOrEqual(2000);
        expect(vehicleData.getYear()).toBeLessThanOrEqual(currentYear);
    });

    test.each(dataProvider)('Vehicle make is in the expected list', ({ vehicleData }) => {
        expect(expectedMakes).toContain(vehicleData.getMake());
    });

    test.each(dataProvider)('Vehicle model is in expected list', ({ vehicleData }) => {
        expect(expectedModels).toContain(vehicleData.getModel());
    });

    test.each(dataProvider)('Vehicle data model is a string', ({ vehicleData }) => {
        expect(typeof vehicleData.getModel()).toBe('string');
    });

    test.each(dataProvider)('Vehicle data make is not null or undefined', ({ vehicleData }) => {
        expect(vehicleData.getMake()).not.toBeNull();
        expect(vehicleData.getMake()).not.toBeUndefined();
    });

    test.each(dataProvider)('Vehicle data model is not null or undefined', ({ vehicleData }) => {
        expect(vehicleData.getModel()).not.toBeNull();
        expect(vehicleData.getModel()).not.toBeUndefined();
    });

    test.each(dataProvider)('Vehicle data model is not null or undefined', ({ vehicleData }) => {
        expect(vehicleData.getYear()).not.toBeNull();
        expect(vehicleData.getYear()).not.toBeUndefined();
    });

    test.each(dataProvider)('Make greater or equal to 3', ({ vehicleData }) => {
        expect(vehicleData.getMake().length).toBeGreaterThanOrEqual(3);
    });

    test.each(dataProvider)('Make less or equal to 13', ({ vehicleData }) => {
        expect(vehicleData.getMake().length).toBeLessThanOrEqual(13);
    });

    test.each(dataProvider)('Make not equal 2', ({ vehicleData }) => {
        expect(vehicleData.getMake().length).not.toBe(2);
    });

    test.each(dataProvider)('Make not equal 10', ({ vehicleData }) => {
        expect(vehicleData.getMake().length).not.toBe(14);
    });

    test.each(dataProvider)('Model greater or equal to 2', ({ vehicleData }) => {
        expect(vehicleData.getModel().length).toBeGreaterThanOrEqual(2);
    });

    test.each(dataProvider)('Model less or equal to 7', ({ vehicleData }) => {
        expect(vehicleData.getModel().length).toBeLessThanOrEqual(7);
    });

    test.each(dataProvider)('Model not equal 1', ({ vehicleData }) => {
        expect(vehicleData.getModel().length).not.toBe(1)
    });

    test.each(dataProvider)('Model not equal 8', ({ vehicleData }) => {
        expect(vehicleData.getModel().length).not.toBe(8);
    });

    test.each(dataProvider)('Manufacturer has id', ({ vehicleData }) => {
        expect(vehicleData.getManufacturerId()).toBeDefined();
        expect(vehicleData.getManufacturerId()).toBe(-1);
    });
});
