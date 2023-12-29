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

      test('Chassis has id', () => {
        expect(chassis.getChassisId()).not.toBeNull();
      });
    
      test('Chassis not null', () => {
        expect(chassis).not.toBeNull();
      });
  
      test('Chassis not undefined', () => {
        expect(chassis).not.toBeUndefined();
      });
  
      test('Color not null', () => {
        expect(chassis.getColor()).not.toBeNull();
      });
  
      test('Color not undefined', () => {
        expect(chassis.getColor()).not.toBeUndefined();
      });
  
      test('Wheels not null', () => {
        expect(chassis.getWheel()).not.toBeNull();
      });
  
      test('Wheels not undefined', () => {
        expect(chassis.getWheel()).not.toBeUndefined();
      });
  
    /*
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

      test('Chassis Capacity is a positive number', () => {
        const capacity = chassis.getCapacity();
        expect(capacity).toBeDefined();
        expect(capacity).toBeGreaterThan(0);
    });

    test('Chassis Color is a string', () => {
        const color = chassis.getColor();
        expect(color).toBeDefined();
        expect(typeof color).toBe('string');
    });

    test('Chassis Wheel is a positive number', () => {
        const wheel = chassis.getWheel();
        expect(wheel).toBeDefined();
        expect(wheel).toBeGreaterThan(0);
    });

    test('Chassis Wheel is not null or undefined', () => {
        expect(chassis.getWheel()).not.toBeNull();
        expect(chassis.getWheel()).not.toBeUndefined();
    });*/
});

/* ---------------------------------------- chassis Setters ---------------------------------------- */

describe('chassis Setters', () => {

  beforeEach(() => {
    chassis = chassisService.generateChassis(2);
  });

  test('Chassis setCapacity',()=>{
    chassis.setCapacity(-1);
    expect(chassis.getCapacity()).toBe(-1);
  });

  test('Chassis setID',()=>{
    chassis.setChassisId(-1);
    expect(chassis.getChassisId()).toBe(-1);
  });

  test('Chassis setColor',()=>{
    chassis.setColor('test');
    expect(chassis.getColor()).toBe('test');
  });

  test('Chassis setWheel',()=>{
    chassis.setWheel(-1);
    expect(chassis.getWheel()).toBe(-1);
  });
});