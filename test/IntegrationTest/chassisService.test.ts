import { faker } from '@faker-js/faker';
import { Chassis } from '../../src/Model/Chassis';
import * as chassisService from '../../src/Services/chassisService'

let chassis: Chassis;


/* ---------------------------------------- generateRegistration ---------------------------------------- */
describe('generateRegistration', () => {

    beforeEach(() => {
        const door = [3,5]
        chassis = chassisService.generateChassis(door[faker.number.int({ min: 0, max: door.length - 1})]);
    });

    test('Registration',()=>{
        expect(typeof chassis).toBe('object')
      })
    
      test('Registration instanceOf Registration', () => {
        expect(chassis).toBeInstanceOf(Chassis);
      });

      test('Registration has id', () => {
        expect(chassis.getChassisId()).toBeDefined();
      });

      test('RegistrationId equal -1', () => {
        expect(chassis.getChassisId()).toBe(-1);
      });
    
      test('RegistrationId not 0', () => {
        expect(chassis.getChassisId()).not.toBe(0);
      });
    
      test('RegistrationId not null or undefined', () => {
        expect(chassis).not.toBeNull();
        expect(chassis).not.toBeUndefined();
      });
});