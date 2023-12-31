import * as fuelService from '../../src/Services/fuelService'

let range: number;
let fuelTank: number;


/* ---------------------------------------- generateRange ---------------------------------------- */
describe('generateRange', () => {

  beforeEach(() => {
    range = fuelService.generateRange();
  });

  test('Range is a number', () => {
    expect(typeof range).toBe('number');
  });

  test('Range is an integer', () => {
    expect(Number.isInteger(range)).toBe(true);
  });

  test('Range is not null', () => {
    expect(range).not.toBeNull();
  });

  test('Range is not  undefined', () => {
    expect(range).toBeDefined()
  });

  test('Range is within the expected range', () => {
    const expectedMin = 350;
    expect(range).toBeGreaterThanOrEqual(expectedMin);
  });

  test('Range is within the expected range', () => {
    const expectedMax = 900;
    expect(range).toBeLessThanOrEqual(expectedMax);
  });

  test('Range is an integer', () => {
    expect(range % 1).toBe(0);
  });

  test('Range is a positive number', () => {
    expect(range).toBeGreaterThan(0);
  });

  test('Range is not a floating-point number', () => {
    expect(range % 1).toBe(0);
  });


  test('Range is less than 901 upper boundary', () => {
    expect(range).toBeLessThan(901);
  });

  test('Range is not 901 upper boundary', () => {
    expect(range).not.toBe(901);
  });

  test('Range not 349 lower boundary', () => {
    expect(range).not.toBe(349);
  });

  test('Range greater than 349 lower boundary', () => {
    expect(range).toBeGreaterThan(349);
  });
});

/* ---------------------------------------- generateFuelTank ---------------------------------------- */
describe('generateFuelTank', () => {

  beforeEach(() => {
    fuelTank = fuelService.generateFuelTank();
  });

  test('Fuel tank is a number', () => {
    expect(typeof fuelTank).toBe('number');
  });

  test('Fuel tank is an integer', () => {
    expect(Number.isInteger(fuelTank)).toBe(true);
  });

  test('Fuel tank is not undefined', () => {
    expect(fuelTank).toBeDefined();
  });

  test('Fuel tank is not null', () => {
    expect(fuelTank).not.toBeNull();
  });

  test('Fuel tank is an integer', () => {
    expect(fuelTank % 1).toBe(0);
  });

  test('Fuel tank is within the expected range', () => {
    const expectedMin = 45;
    expect(fuelTank).toBeGreaterThanOrEqual(expectedMin);
  });

  test('Fuel tank is within the expected range', () => {
    const expectedMax = 65;
    expect(fuelTank).toBeLessThanOrEqual(expectedMax);
  });

  test('Fuel tank is a positive number', () => {
    expect(fuelTank).toBeGreaterThan(0);
  });

  test('Fuel tank not 66 upper boundary', () => {
    expect(fuelTank).not.toBe(66)
  });

  test('Fuel tank is less than 66 upper boundary', () => {
    expect(fuelTank).toBeLessThan(66);
  });

  test('Fuel tank not 44 lower boundary', () => {
    expect(fuelTank).not.toBe(44)
  });

  test('Fuel tank is less than 44 lower boundary', () => {
    expect(fuelTank).toBeGreaterThan(44);
  });

  test('Fuel tank is not a floating-point number', () => {
    expect(fuelTank % 1).toBe(0);
  });
});