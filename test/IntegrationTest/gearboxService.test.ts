import { Gearbox } from '../../src/Model/Gearbox';
import * as gearboxService from '../../src/Services/gearboxService'

let gearbox: Gearbox;
/*
const expectedGearboxTypes = ['Automatic', 'Manuel', 'Electric'];
const expectedGears = [4, 5, 6, 7];
const expectedDriveTrainTypes = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
*/
/* ---------------------------------------- generateGearbox ---------------------------------------- */
describe('generateGearbox', () => {

    beforeEach(() => {
        gearbox = gearboxService.generateGearbox();
    });

    test('Gearbox',()=>{
        expect(typeof gearbox).toBe('object')
      });
    
      test('Gearbox instanceOf Gearbox', () => {
        expect(gearbox).toBeInstanceOf(Gearbox);
      });

      test('Gearbox has id', () => {
        expect(gearbox.getGearboxId()).toBeDefined();
      });

      test('Gearbox has id', () => {
        expect(gearbox.getGearboxId()).not.toBeNull();
      });
    
      test('Gearbox not null', () => {
        expect(gearbox).not.toBeNull();
      });

      test('Gearbox not undefined', () => {
        expect(gearbox).not.toBeUndefined();
      });

      test('Drive train not null', () => {
        expect(gearbox.getDriveTrain()).not.toBeNull();
      });

      test('Drive train not undefined', () => {
        expect(gearbox.getDriveTrain()).not.toBeUndefined();
      });

      test('Gears not null', () => {
        expect(gearbox.getGears()).not.toBeNull();
      });

      test('Gears not undefined', () => {
        expect(gearbox.getGears()).not.toBeUndefined();
      });

      test('Type not null', () => {
        expect(gearbox.getType()).not.toBeNull();
      });

      test('Type not undefined', () => {
        expect(gearbox.getType()).not.toBeUndefined();
      });
});


  /* ---------------------------------------- Gearbox Setters ---------------------------------------- */

  describe('Gearbox Setters', () => {

    beforeEach(() => {
      gearbox = gearboxService.generateGearbox();
    });
  
    test('Gearbox setLicenseNumber',()=>{
      gearbox.setDriveTrain('test');
      expect(gearbox.getDriveTrain()).toBe('test');
    });
  
    test('Gearbox setVIN',()=>{
      gearbox.setGearboxId(-1);
      expect(gearbox.getGearboxId()).toBe(-1);
    });
  
    test('Gearbox setGearboxId',()=>{
      gearbox.setGears(-1);
      expect(gearbox.getGears()).toBe(-1);
    });

    test('Gearbox setGearboxId',()=>{
      gearbox.setType('test');
      expect(gearbox.getType()).toBe('test');
    });
  });