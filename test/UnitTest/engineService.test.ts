import * as engineService from '../../src/Services/engineService'

/* ---------------------------------------- generatePower ---------------------------------------- */


describe('generatePower', () => {
  test('Generated power is within the specified range', () => {
    const power = engineService.generatePower();
    expect(power).toBeGreaterThanOrEqual(150);
    expect(power).toBeLessThanOrEqual(1100);
  });

  test('Power is a number', () => {
    const power = engineService.generatePower();
    expect(typeof power).toBe('number');
  });

  test('Power is an integer', () => {
    const capacity = engineService.generatePower();
    expect(Number.isInteger(capacity)).toBe(true);
  });

  test('Power is not a string', () => {
    const result = engineService.generatePower();
    expect(result).not.toBe('string');
});

test('Power is a positive number', () => {
    const result = engineService.generatePower();
    expect(result).toBeGreaterThan(0);
  });

  test('Power is not a floating-point number', () => {
    const result = engineService.generatePower();
    expect(result % 1).toBe(0);
  });

  test('Type is not null or undefined', () => {
    const result = engineService.generatePower();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });
});


/* ---------------------------------------- generateType ---------------------------------------- */

describe('generateType', () => {
  test('Engine type is one of the defined types', () => {
    const types = ['Electric', 'V6', '4cyl', 'V8', 'V10', 'V12'];
    const generatedType = engineService.generateType();
    expect(types).toContain(generatedType);
  });

  test('Engine type is a string', () => {
    const generatedType = engineService.generateType();
    expect(typeof generatedType).toBe('string');
  });

  test('Engine type is not an empty string', () => {
    const generatedType = engineService.generateType();
    expect(generatedType).not.toBe('');
  });

  test('Engine type is not null or undefined', () => {
    const result = engineService.generateType();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });

  test('Engine type is a string with no leading or trailing whitespaces', () => {
    const result = engineService.generateType();
    expect(result.trim()).toEqual(result);
  });

  test('Engine type is not an unexpected type', () => {
    const result = engineService.generateType();
    const unexpectedTypes = ['2cyl', 'rotery'];
    expect(unexpectedTypes).not.toContain(result);
  });
});


/* ---------------------------------------- generateFuelType ---------------------------------------- */

describe('generateType', () => {

    test('Fuel type is a string', () => {
        const engineType = 'V8';
        const generatedFuelType = engineService.generateFuelType(engineType);
        expect(typeof generatedFuelType).toBe('string');
      });
  
    test('Fuel Type is not an empty string', () => {
      const generatedType = engineService.generateFuelType('V8');
      expect(generatedType).not.toBe('');
    });
  
    test('Fuel type is not null or undefined', () => {
      const result = engineService.generateFuelType('V8');
      expect(result).not.toBeNull();
      expect(result).not.toBeUndefined();
    });
  
    test('Type is a string with no leading or trailing whitespaces', () => {
      const result = engineService.generateFuelType('V8');
      expect(result.trim()).toEqual(result);
    });
  
    test('Fuel type is not an unexpected type', () => {
      const result = engineService.generateFuelType('V8');
      const unexpectedTypes = ['Biodiesel', 'Random fuel'];
      expect(unexpectedTypes).not.toContain(result);
    });

    test('Fuel type is "AC" for electric engines', () => {
        const generatedFuelType = engineService.generateFuelType('Electric');
        expect(generatedFuelType).toBe('AC');
      });

      test('Fuel type greater or equal to 2', async () => {
        const result = engineService.generateFuelType('Electric');
        expect(result.length).toBeGreaterThanOrEqual(2);
      });
    
      test('Fuel type less or equal to 6', async () => {
        const result = engineService.generateFuelType('V12');
        expect(result.length).toBeLessThanOrEqual(6);
      });

      test('Fuel type contains',()=> {
        const result = engineService.generateFuelType('V12');
        const expectedTypes = ['Diesel', 'Petrol', 'Hybrid'];
        expect(expectedTypes).toContain(result);
      });
  });