import * as engineService from '../../src/Services/engineService'
import { Engine } from '../../src/Model/Engine';

const expectedFuelTypeData = ['Diesel', 'Petrol', 'Hybrid', 'Petrol', 'AC']

let engine: Engine;


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

  /* ---------------------------------------- engine Setters ---------------------------------------- */

  describe('engine Setters', () => {

    beforeEach(() => {
      engine = engineService.generateEngine();
    });
  
    test('Registration setLicenseNumber',()=>{
      engine.setFuelType('test');
      expect(engine.getFuelType()).toBe('test');
    });
  
    test('Registration setVIN',()=>{
      engine.setEngineId(-1);
      expect(engine.getEngineId()).toBe(-1);
    });
  
    test('Registration setRegistrationId',()=>{
      engine.setHP(-1);
      expect(engine.getHP()).toBe(-1);
    });

    test('Registration setRegistrationId',()=>{
      engine.setTorque(-1);
      expect(engine.getTorque()).toBe(-1);
    });

    test('Registration setRegistrationId',()=>{
      engine.setType('test');
      expect(engine.getType()).toBe('test');
    });
  });