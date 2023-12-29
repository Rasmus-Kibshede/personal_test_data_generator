import { FuelStats } from '../../src/Model/FuelStats';
import * as fuelService from '../../src/Services/fuelService'

let fuel: FuelStats;

/* ---------------------------------------- generatefuel ---------------------------------------- */
describe('Generate fuel', () => {

    beforeEach(() => {
        fuel = fuelService.generateFuelStats();
    });

    test('test if object', () => {
        expect(typeof fuel).toBe('object');
    });

    test('Fuel instanceOf fuel', () => {
        expect(fuel).toBeInstanceOf(FuelStats);
    });

    test('Fuel has id', () => {
        expect(fuel.getFuelStatsId()).toBeDefined();
      });

      test('Fuel has id', () => {
        expect(fuel.getFuelStatsId()).not.toBeNull();
      });
    
      test('Fuel not null', () => {
        expect(fuel).not.toBeNull();
      });

      test('Fuel not undefined', () => {
        expect(fuel).not.toBeUndefined();
      });

      test('FuelTank train not null', () => {
        expect(fuel.getFuelTank()).not.toBeNull();
      });

      test('FuelTank train not undefined', () => {
        expect(fuel.getFuelTank()).not.toBeUndefined();
      });

      test('Range not null', () => {
        expect(fuel.getRange()).not.toBeNull();
      });

      test('Range not undefined', () => {
        expect(fuel.getRange()).not.toBeUndefined();
      });
});