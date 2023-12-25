import * as fuelService from '../../src/Services/fuelService'

/* ---------------------------------------- generateRange ---------------------------------------- */
//TODO: Mangler flere test på begge!
describe('generateRange', () => {
    test('Range is a number', () => {
        const result = fuelService.generateRange();
        expect(typeof result).toBe('number');
      });

      test('Range is an integer', () => {
        const capacity = fuelService.generateRange();
        expect(Number.isInteger(capacity)).toBe(true);
      });

      test('Range is not null or undefined', () => {
        const result = fuelService.generateRange();
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
      });
      
      test('Range is within the expected range', () => {
        const result = fuelService.generateRange();
        const expectedMin = 350;
        const expectedMax = 900;
        expect(result).toBeGreaterThanOrEqual(expectedMin);
        expect(result).toBeLessThanOrEqual(expectedMax);
      });
      
      test('Range is an integer', () => {
        const result = fuelService.generateRange();
        expect(result % 1).toBe(0);
      });
      
      test('Range is a positive number', () => {
        const result = fuelService.generateRange();
        expect(result).toBeGreaterThan(0);
      });
      
      test('Range is less than 1000', () => {
        const result = fuelService.generateRange();
        expect(result).toBeLessThan(1000);
      }); 
});

/* ---------------------------------------- generateFuelTank ---------------------------------------- */
describe('generateFuelTank', () => {

test('Fuel tank is a number', () => {
    const result = fuelService.generateFuelTank();
    expect(typeof result).toBe('number');
  });

  test('Fuel tank is not null or undefined', () => {
    const result = fuelService.generateFuelTank();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });
    
  test('Fuel tank is an integer', () => {
    const result = fuelService.generateFuelTank();
    expect(result % 1).toBe(0);
  });
  
  test('Fuel tank is within the expected range', () => {
    const result = fuelService.generateFuelTank();
    const expectedMin = 45;
    const expectedMax = 65;
    expect(result).toBeGreaterThanOrEqual(expectedMin);
    expect(result).toBeLessThanOrEqual(expectedMax);
  });
  
  test('Fuel tank is a positive number', () => {
    const result = fuelService.generateFuelTank();
    expect(result).toBeGreaterThan(0);
  });
  
  test('Fuel tank is less than 100', () => {
    const result = fuelService.generateFuelTank();
    expect(result).toBeLessThan(100);
  });
});