import { Gearbox } from '../../src/Model/Gearbox';
import * as gearboxService from '../../src/Services/gearboxService'

let gearbox: Gearbox;

const expectedGearboxTypes = ['Automatic', 'Manuel', 'Electric'];
const expectedGears = [4, 5, 6, 7];
const expectedDriveTrainTypes = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];

/* ---------------------------------------- generateGearbox ---------------------------------------- */
describe('generateRegistration', () => {

    beforeEach(() => {
        gearbox = gearboxService.generateGearbox();
    });

    test('Registration',()=>{
        expect(typeof gearbox).toBe('object')
      });
    
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


/* ---------------------------------------- generateGearbox ---------------------------------------- */
describe('generateGearbox', () => {
    //Ville ikke Mocke Gearbox eller generateGearbox her?  
    beforeEach(() => {
      gearbox = gearboxService.generateGearbox();
    });
  
    test('Gearbox correct type', () => {
      expect(expectedGearboxTypes).toContain(gearbox.getType())
    });
  
    test('Gearbox correct gear', () => {
      expect(expectedGears).toContain(gearbox.getGears());
    });
  
    test('Gearbox correct driveTrain', () => {
      expect(expectedDriveTrainTypes).toContain(gearbox.getDriveTrain());
    });
  
    test('Gearbox has id', () => {
      expect(gearbox.getGearboxId()).toBeDefined();
      expect(gearbox.getGearboxId()).toBe(-1);
    });
  });


  /* ---------------------------------------- Gearbox Setters ---------------------------------------- */

  describe('Gearbox Setters', () => {

    beforeEach(() => {
      gearbox = gearboxService.generateGearbox();
    });
  
    test('Registration setLicenseNumber',()=>{
      gearbox.setDriveTrain('test');
      expect(gearbox.getDriveTrain()).toBe('test');
    });
  
    test('Registration setVIN',()=>{
      gearbox.setGearboxId(-1);
      expect(gearbox.getGearboxId()).toBe(-1);
    });
  
    test('Registration setRegistrationId',()=>{
      gearbox.setGears(-1);
      expect(gearbox.getGears()).toBe(-1);
    });

    test('Registration setRegistrationId',()=>{
      gearbox.setType('test');
      expect(gearbox.getType()).toBe('test');
    });
  });