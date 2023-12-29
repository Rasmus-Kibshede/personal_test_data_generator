import * as engineService from '../../src/Services/engineService'
import { Engine } from '../../src/Model/Engine';

let engine: Engine;


/* ---------------------------------------- generateEngine ---------------------------------------- */
describe('Generate Engine', () => {
    
    test('test coverage', () => {
      const result = engineService.generateEngine();
      expect(typeof result).toBe('object');
    });
  
    test('Engine instanceOf Engine', () => {
      const result = engineService.generateEngine();
      expect(result).toBeInstanceOf(Engine);
    });

    test('Engine has id', () => {
      expect(engine.getEngineId()).toBeDefined();
    });

    test('Engine has id', () => {
      expect(engine.getEngineId()).not.toBeNull();
    });
  
    test('Engine not null', () => {
      expect(engine).not.toBeNull();
    });

    test('Engine not undefined', () => {
      expect(engine).not.toBeUndefined();
    });

    test('Fuel type train not null', () => {
      expect(engine.getFuelType()).not.toBeNull();
    });

    test('Fuel type train not undefined', () => {
      expect(engine.getFuelType()).not.toBeUndefined();
    });

    test('Horsepower not null', () => {
      expect(engine.getHP()).not.toBeNull();
    });

    test('Horsepower not undefined', () => {
      expect(engine.getHP()).not.toBeUndefined();
    });

    test('Type not null', () => {
      expect(engine.getType()).not.toBeNull();
    });

    test('Type not undefined', () => {
      expect(engine.getType()).not.toBeUndefined();
    });

    test('Torque not null', () => {
      expect(engine.getTorque()).not.toBeNull();
    });

    test('Torque not undefined', () => {
      expect(engine.getTorque()).not.toBeUndefined();
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