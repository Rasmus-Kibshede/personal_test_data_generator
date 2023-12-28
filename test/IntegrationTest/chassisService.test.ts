import { faker } from '@faker-js/faker';
import { Chassis } from '../../src/Model/Chassis';
import * as chassisService from '../../src/Services/chassisService'

let chassis: Chassis;


/* ---------------------------------------- generateChassis ---------------------------------------- */
describe('generateChassis', () => {

    beforeEach(() => {
        const door = [3,5]
        chassis = chassisService.generateChassis(door[faker.number.int({ min: 0, max: door.length - 1})]);
    });

    test('Chassis is an object',()=>{
        expect(typeof chassis).toBe('object')
      })
    
      test('Chassis instanceOf Chassis', () => {
        expect(chassis).toBeInstanceOf(Chassis);
      });

      test('Chassis has id', () => {
        expect(chassis.getChassisId()).toBeDefined();
      });

      test('ChassisId equal -1', () => {
        expect(chassis.getChassisId()).toBe(-1);
      });
    
      test('ChassisId not 0', () => {
        expect(chassis.getChassisId()).not.toBe(0);
      });
    
      test('Chassis not null or undefined', () => {
        expect(chassis).not.toBeNull();
        expect(chassis).not.toBeUndefined();
      });

      test('ChassisId not null or undefined', () => {
        expect(chassis.getChassisId()).not.toBeNull();
        expect(chassis.getChassisId()).not.toBeUndefined();
      });

      test('Capacity not null or undefined', () => {
        expect(chassis.getCapacity()).not.toBeNull();
        expect(chassis.getCapacity()).not.toBeUndefined();
      });

      test('Color not null or undefined', () => {
        expect(chassis.getColor()).not.toBeNull();
        expect(chassis.getColor()).not.toBeUndefined();
      });

      test('Color not null or undefined', () => {
        expect(chassis.getWheel()).not.toBeNull();
        expect(chassis.getWheel()).not.toBeUndefined();
      });

      test('Color not null or undefined', () => {
        expect(chassis.getWheel()).not.toBeNull();
        expect(chassis.getWheel()).not.toBeUndefined();
      });
});