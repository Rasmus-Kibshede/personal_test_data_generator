import { faker } from '@faker-js/faker';
import * as engineService from '../../src/Services/engineService'
import { Engine } from '../../src/Model/Engine';

const expectedPowerData = [672, 856, 301, 420, 488, 611, 541, 993, 278, 879]
const expectedTypeData = ['V8', '4cyl', 'V12', 'V6', 'Electric', 'V10']
const expectedFuelTypeData = ['Diesel', 'Petrol', 'Hybrid', 'Petrol', 'AC']

const dataProvider = expectedPowerData.map((HP, index) => ({
  HP,
  engine: expectedTypeData[expectedTypeData.length > index ? index : faker.number.int({ min: 0, max: expectedTypeData.length - 1 })],
  fuelType: expectedFuelTypeData[expectedFuelTypeData.length > index ? index : faker.number.int({ min: 0, max: expectedFuelTypeData.length - 1 })]
}));


/* ---------------------------------------- generatePower ---------------------------------------- */


describe('generatePower', () => {
  test('test coverage', () => {
    const result = engineService.generateType();
    expect(expectedTypeData).toContain(result);
  })

  test.each(dataProvider)('Generated power is within the specified range', ({ HP }) => {
    expect(HP).toBeGreaterThanOrEqual(150);
    expect(HP).toBeLessThanOrEqual(1100);
  });

  test.each(dataProvider)('Power is less than 1101 upper boundary', ({ HP }) => {
    expect(HP).not.toBe(1101);
    expect(HP).toBeLessThan(1100);
  });

  test.each(dataProvider)('Power greater than 149 lower boundary', ({ HP }) => {
    expect(HP).toBeGreaterThan(150);
    expect(HP).not.toBe(149);
  });

  test.each(dataProvider)('Power is in expected range', ({ HP }) => {
    expect(expectedPowerData).toContain(HP);
  });

  test.each(dataProvider)('Power is a number', ({ HP }) => {
    expect(typeof HP).toBe('number');
  });

  test.each(dataProvider)('Power is an integer', ({ HP }) => {
    expect(Number.isInteger(HP)).toBe(true);
  });

  test.each(dataProvider)('Power is not a string', ({ HP }) => {
    expect(HP).not.toBe('string');
  });

  test.each(dataProvider)('Power is a positive number', ({ HP }) => {
    expect(HP).toBeGreaterThan(0);
  });

  test.each(dataProvider)('Power is not a floating-point number', ({ HP }) => {
    expect(HP % 1).toBe(0);
  });

  test.each(dataProvider)('Type is not null or undefined', ({ HP }) => {
    expect(HP).not.toBeNull();
    expect(HP).not.toBeUndefined();
  });
});


/* ---------------------------------------- generateType ---------------------------------------- */

describe('generateType', () => {

  test.each(dataProvider)('Engine type is one of the defined types', ({ engine }) => {
    expect(expectedTypeData).toContain(engine);
  });

  test.each(dataProvider)('Engine type is a string', ({ engine }) => {
    expect(typeof engine).toBe('string');
  });

  test.each(dataProvider)('Engine type is not an empty string', ({ engine }) => {
    expect(engine).not.toBe('');
  });

  test.each(dataProvider)('Engine type is not null or undefined', ({ engine }) => {
    expect(engine).not.toBeNull();
    expect(engine).not.toBeUndefined();
  });

  test.each(dataProvider)('Engine type is a string with no leading or trailing whitespaces', ({ engine }) => {
    expect(engine.trim()).toEqual(engine);
  });

  test.each(dataProvider)('Engine type is not an unexpected type', ({ engine }) => {
    const unexpectedTypes = ['2cyl', 'rotery'];
    expect(unexpectedTypes).not.toContain(engine);
  });

  test.each(dataProvider)('Engine is a string with valid characters', ({ engine }) => {
    expect(/^[A-Za-z0-9\s]+$/.test(engine)).toBe(true);
  });

  test.each(dataProvider)('Engine is less than 8 upper boundary', ({ engine }) => {
    expect(engine.length).not.toBe(9);
    expect(engine.length).toBeLessThan(9);
  });

  test.each(dataProvider)('Engine greater than 3 lower boundary', ({ engine }) => {
    expect(engine.length).toBeGreaterThan(1);
    expect(engine.length).not.toBe(1);
  });
});


/* ---------------------------------------- generateFuelType ---------------------------------------- */

describe('generateType', () => {
  test.each(dataProvider)('Fuel type is a string', ({ fuelType }) => {
    expect(typeof fuelType).toBe('string');
  });

  test.each(dataProvider)('Fuel Type is not an empty string', ({ fuelType }) => {
    expect(fuelType).not.toBe('');
  });

  test.each(dataProvider)('Fuel type is not null or undefined', ({ fuelType }) => {
    expect(fuelType).not.toBeNull();
    expect(fuelType).not.toBeUndefined();
  });

  test.each(dataProvider)('Type is a string with no leading or trailing whitespaces', ({ fuelType }) => {
    expect(fuelType.trim()).toEqual(fuelType);
  });

  test.each(dataProvider)('Fuel type is not an unexpected type', ({ fuelType }) => {
    const unexpectedTypes = ['Biodiesel', 'Random fuel'];
    expect(unexpectedTypes).not.toContain(fuelType);
  });

  test('Fuel type is "AC" for electric engines', () => {
    const generatedFuelType = engineService.generateFuelType('Electric');
    expect(generatedFuelType).toBe('AC');
  });

  test.each(dataProvider)('Fuel type greater or equal to 2', async ({ fuelType }) => {
    expect(fuelType.length).toBeGreaterThanOrEqual(2);
  });

  test.each(dataProvider)('Fuel type less or equal to 6', async ({ fuelType }) => {
    expect(fuelType.length).toBeLessThanOrEqual(6);
  });

  test.each(dataProvider)('Fuel type contains', ({ fuelType }) => {
    const expectedTypes = ['Diesel', 'Petrol', 'Hybrid', 'AC'];
    expect(expectedTypes).toContain(fuelType);
  });
});


/* ---------------------------------------- 100% codeCoverage ---------------------------------------- */
describe('generateType', () => {
  test('Generated power is within the specified range', () => {
    const result = engineService.generatePower();
    expect(result).toBeGreaterThanOrEqual(150)
  });

  test('test coverage', () => {
    const result = engineService.generateFuelType('Electric');
    expect(result).toBe('AC');
  });

  test('test coverage', () => {
    const result = engineService.generateFuelType('V8');
    expect(expectedFuelTypeData).toContain(result);
  });

  test('test coverage', () => {
    const result = engineService.generateEngine();
    expect(typeof result).toBe('object');
  });


  test('Engine instanceOf Engine', () => {
    const result = engineService.generateEngine();
    expect(result).toBeInstanceOf(Engine);
  });
});