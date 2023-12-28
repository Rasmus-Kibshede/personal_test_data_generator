import * as engineService from '../../src/Services/engineService'
import { Engine } from '../../src/Model/Engine';

const expectedFuelTypeData = ['Diesel', 'Petrol', 'Hybrid', 'Petrol', 'AC']


/* ---------------------------------------- generateEngine ---------------------------------------- */
describe('Generate Engine', () => {
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