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