import { Gearbox } from '../../src/Model/Gearbox';
import * as gearboxService from '../../src/Services/gearboxService'

let gearbox: Gearbox;


/* ---------------------------------------- generateRegistration ---------------------------------------- */
describe('generateRegistration', () => {

    beforeEach(() => {
        gearbox = gearboxService.generateGearbox();
    });

    test('Registration',()=>{
        expect(typeof gearbox).toBe('object')
      })
    
      test('Registration instanceOf Registration', () => {
        expect(gearbox).toBeInstanceOf(Gearbox);
      });

      test('Registration has id', () => {
        expect(gearbox.getGearboxId()).toBeDefined();
      });

      test('RegistrationId equal -1', () => {
        expect(gearbox.getGearboxId()).toBe(-1);
      });
    
      test('RegistrationId not 0', () => {
        expect(gearbox.getGearboxId()).not.toBe(0);
      });
    
      test('RegistrationId not null or undefined', () => {
        expect(gearbox).not.toBeNull();
        expect(gearbox).not.toBeUndefined();
      });

});