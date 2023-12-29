import { FuelStats } from '../../src/Model/FuelStats';
import * as fuelService from '../../src/Services/fuelService'

let fuel: FuelStats;

/* ---------------------------------------- generatefuel ---------------------------------------- */
describe('Generate fuel', () => {

    beforeEach(() => {
        fuel = fuelService.generateFuelStats();
    });

    test('test coverage', () => {
        expect(typeof fuel).toBe('object');
    });

    test('Fuel instanceOf fuel', () => {
        expect(fuel).toBeInstanceOf(FuelStats);
    });

    test('FuelID has id', () => {
        expect(fuel.getFuelStatsId()).toBeDefined();
      });

      test('FuelID has id', () => {
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

    /*
    test('Generated power is within the specified range', () => {
        const expectedMin = 45;
        const expectedMax = 65;
        expect(fuel.getFuelTank()).toBeGreaterThanOrEqual(expectedMin);
        expect(fuel.getFuelTank()).toBeLessThanOrEqual(expectedMax);
    });

    test('test coverage', () => {
        expect(fuel.getFuelStatsId).not.toBe(-1);
    });

    test('test coverage', () => {
        const expectedMin = 350;
        const expectedMax = 900;
        expect(fuel.getRange()).toBeGreaterThanOrEqual(expectedMin);
        expect(fuel.getRange()).toBeLessThanOrEqual(expectedMax);
    });*/
});

/* ---------------------------------------- Fuel Setters ---------------------------------------- */

describe('fuel Setters', () => {

    beforeEach(() => {
        fuel = fuelService.generateFuelStats();
    });

    test('Registration setLicenseNumber', () => {
        fuel.setFuelStatsId(-1);
        expect(fuel.getFuelStatsId()).toBe(-1);
    });

    test('Registration setVIN', () => {
        fuel.setFuelTank(-1);
        expect(fuel.getFuelTank()).toBe(-1);
    });

    test('Registration setRegistrationId', () => {
        fuel.setRange(-1);
        expect(fuel.getRange()).toBe(-1);
    });
});