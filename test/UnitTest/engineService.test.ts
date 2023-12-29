import * as engineService from '../../src/Services/engineService'

let hp: number;
let engine: string;
let fuelType: string;

const expectedTypeData = ['V8', '4cyl', 'V12', 'V6', 'Electric', 'V10']


/* ---------------------------------------- generatePower ---------------------------------------- */


describe('generatePower', () => {

  beforeEach(() => {
    hp = engineService.generatePower();
  });

  test('test coverage', () => {
    const result = engineService.generateType();
    expect(expectedTypeData).toContain(result);
  })

  test('Generated power is within the specified range', () => {
    expect(hp).toBeLessThanOrEqual(1100);
  });

  test('Generated power is within the specified range', () => {
    expect(hp).toBeGreaterThanOrEqual(150);
  });

  test('Power is less than 1101 upper boundary', () => {
    expect(hp).toBeLessThan(1101);
  });

  test('Power is not 1101 upper boundary', () => {
    expect(hp).not.toBe(1101);
  });

  test('Power greater than 150 lower boundary', () => {
    expect(hp).toBeGreaterThan(150);
  });

  test('Power is not 149 lower boundary', () => {
    expect(hp).not.toBe(149);
  });

  test('Power is a number', () => {
    expect(typeof hp).toBe('number');
  });

  test('Power is an integer', () => {
    expect(Number.isInteger(hp)).toBe(true);
  });

  test('Power is not a string', () => {
    expect(hp).not.toBe('string');
  });

  test('Power is a positive number', () => {
    expect(hp).toBeGreaterThan(0);
  });

  test('Power is not a floating-point number', () => {
    expect(hp % 1).toBe(0);
  });

  test('Type is not undefined', () => {
    expect(hp).toBeDefined()
  });

  test('Type is not null', () => {
    expect(hp).not.toBeNull();
  });
});


/* ---------------------------------------- generateType ---------------------------------------- */

describe('generateType', () => {

  beforeEach(() => {
    engine = engineService.generateType();
  });

  test('Engine type is one of the defined types', () => {
    expect(expectedTypeData).toContain(engine);
  });

  test('Engine type is a string', () => {
    expect(typeof engine).toBe('string');
  });

  test('Engine type is not an empty string', () => {
    expect(engine).not.toBe('');
  });

  test('Engine type not undefined', () => {
    expect(engine).toBeDefined()
  });

  test('Engine type is not null', () => {
    expect(engine).not.toBeNull();
  });

  test('Engine type is a string with no leading or trailing whitespaces', () => {
    expect(engine.trim()).toEqual(engine);
  });

  test('Engine type is not an unexpected type', () => {
    const unexpectedTypes = ['2cyl', 'rotery'];
    expect(unexpectedTypes).not.toContain(engine);
  });

  test('Engine is a string with valid characters', () => {
    expect(/^[A-Za-z0-9\s]+$/.test(engine)).toBe(true);
  });

  test('Engine is less than 8 upper boundary', () => {
    expect(engine.length).toBeLessThan(9);
  });

  test('Engine not 9 upper boundary', () => {
    expect(engine.length).not.toBe(9);
  });

  test('Engine greater than 1 lower boundary', () => {
    expect(engine.length).toBeGreaterThan(1);
  });

  test('Engine not 1 lower boundary', () => {
    expect(engine.length).not.toBe(1);
  });

  test('Engine is within the specified range', () => {
    expect(engine.length).toBeLessThanOrEqual(8);
  });

  test('Engine is within the specified range', () => {
    expect(engine.length).toBeGreaterThanOrEqual(2);
  });
});


/* ---------------------------------------- generateFuelType ---------------------------------------- */

describe('generateFuelType', () => {

  beforeEach(() => {
    fuelType = engineService.generateFuelType('v8');
  });

  test('Fuel type is a string', () => {
    expect(typeof engineService.generateFuelType(engine)).toBe('string');
  });

  test('Fuel Type is not an empty string', () => {
    expect(fuelType).not.toBe('');
  });

  test('Fuel type is not undefined', () => {
    expect(fuelType).toBeDefined()
  });

  test('Fuel type is not null', () => {
    expect(fuelType).not.toBeNull();
  });

  test('Type is a string with no leading or trailing whitespaces', () => {
    expect(fuelType.trim()).toEqual(fuelType);
  });

  test('Fuel type is not an unexpected type', () => {
    const unexpectedTypes = ['Biodiesel', 'Random fuel'];
    expect(unexpectedTypes).not.toContain(fuelType);
  });

  test('Fuel type is "AC" for electric engines', () => {
    const generatedFuelType = engineService.generateFuelType('Electric');
    expect(generatedFuelType).toBe('AC');
  });

  test('Fuel type greater or equal to 2', async () => {
    expect(fuelType.length).toBeGreaterThanOrEqual(2);
  });

  test('Fuel type less or equal to 6', async () => {
    expect(fuelType.length).toBeLessThanOrEqual(7);
  });

  test('Fuel type  is less than 8 upper boundary', () => {
    expect(fuelType.length).toBeLessThan(8);
  });

  test('Fuel type  not 9 upper boundary', () => {
    expect(fuelType.length).not.toBe(8);
  });

  test('Fuel type  greater than 1 lower boundary', () => {
    expect(fuelType.length).toBeGreaterThan(1);
  });

  test('Fuel type  not 1 lower boundary', () => {
    expect(fuelType.length).not.toBe(1);
  });

  test('Fuel type contains', () => {
    const expectedTypes = ['Diesel', 'Petrol', 'Hybrid', 'AC'];
    expect(expectedTypes).toContain(fuelType);
  });
});


