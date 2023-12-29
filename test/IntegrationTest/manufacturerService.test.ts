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

    test('Vehicle is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getMake().trim()).toEqual(manufacturer.getMake());
    });

    test('Vehicle is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getModel().trim()).toEqual(manufacturer.getModel());
    });

    test('Vehicle contains only alphanumeric characters', () => {
        expect(manufacturer.getMake()).toMatch(/^[a-zA-Z0-9-]+$/);
    });

    test('Vehicle contains only alphanumeric characters', () => {
        expect(manufacturer.getModel()).toMatch(/^[a-zA-Z0-9\s-]+$/);
    });

    test('Vehicle data is of type Manufacturer', () => {
        expect(manufacturer).toBeInstanceOf(Manufacturer)
    });

    test('Vehicle data has make property', () => {
        expect(manufacturer).toHaveProperty('make');
        expect(typeof manufacturer.getMake()).toBe('string');
    });

    test('Vehicle data has model property', () => {
        expect(manufacturer).toHaveProperty('model');
        expect(typeof manufacturer.getModel()).toBe('string');
    });

    test('Vehicle data has year property', () => {
        expect(manufacturer).toHaveProperty('year');
        expect(typeof manufacturer.getYear()).toBe('number');
    });

    test('Make is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getMake().trim()).toEqual(manufacturer.getMake());
    });

    test('Model is a string with no leading or trailing whitespaces', () => {
        expect(manufacturer.getModel().trim()).toEqual(manufacturer.getModel());
    });

    test('Vehicle data has valid year', () => {
        const currentYear = new Date().getFullYear();
        expect(manufacturer.getYear()).toBeGreaterThanOrEqual(2000);
        expect(manufacturer.getYear()).toBeLessThanOrEqual(currentYear);
    });

    test('Vehicle make is in the expected list', () => {
        expect(expectedMakes).toContain(manufacturer.getMake());
    });

    test('Vehicle model is in expected list', () => {
        expect(expectedModels).toContain(manufacturer.getModel());
    });

    test('Vehicle data model is a string', () => {
        expect(typeof manufacturer.getModel()).toBe('string');
    });

    test('Vehicle data make is not null or undefined', () => {
        expect(manufacturer.getMake()).not.toBeNull();
        expect(manufacturer.getMake()).not.toBeUndefined();
    });

    test('Vehicle data model is not null or undefined', () => {
        expect(manufacturer.getModel()).not.toBeNull();
        expect(manufacturer.getModel()).not.toBeUndefined();
    });

    test('Vehicle data model is not null or undefined', () => {
        expect(manufacturer.getYear()).not.toBeNull();
        expect(manufacturer.getYear()).not.toBeUndefined();
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

    test('Manufacturer has id', () => {
        expect(manufacturer.getManufacturerId()).toBeDefined();
        expect(manufacturer.getManufacturerId()).toBe(-1);
    });
});

/* ---------------------------------------- Manufacturer setters ---------------------------------------- */

describe('manufacturer Setters', () => {

    beforeEach(() => {
      manufacturer = manufacturerService.generateManufacturer();
    });
  
    test('manufacturer setID',()=>{
      manufacturer.setManufacturerId(-1);
      expect(manufacturer.getManufacturerId()).toBe(-1);
    });
  
    test('manufacturer setMake',()=>{
      manufacturer.setMake('test');
      expect(manufacturer.getMake()).toBe('test');
    });
  
    test('manufacturer setYear',()=>{
      manufacturer.setYear(-1);
      expect(manufacturer.getYear()).toBe(-1);
    });

    test('manufacturer setModel',()=>{
        manufacturer.setModel('test');
        expect(manufacturer.getModel()).toBe('test');
      });
  });
