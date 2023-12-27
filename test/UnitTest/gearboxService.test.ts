import { faker } from '@faker-js/faker';
import * as gearboxService from '../../src/Services/gearboxService'
import { Gearbox } from '../../src/Model/Gearbox';

/* ---------------------------------------- generateType ---------------------------------------- */
describe('generateType', () => {

  test('Type is a string', () => {
    const result = gearboxService.generateType();
    expect(typeof result).toBe('string');
  });

  test('Type expected values', () => {
    const result = gearboxService.generateType();
    const expectedTypes = ['Automatic', 'Manuel', 'Electric'];
    expect(expectedTypes).toContain(result);
  });

  test('Type is not null or undefined', () => {
    const result = gearboxService.generateType();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });

  test('Type is a valid type', () => {
    const result = gearboxService.generateType();
    const validTypes = ['Automatic', 'Manuel', 'Electric'];
    expect(validTypes.includes(result)).toBe(true);
  });

  test('Type is a string with correct length', () => {
    const result = gearboxService.generateType();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('Type is a string with no leading or trailing whitespaces', () => {
    const result = gearboxService.generateType();
    expect(typeof result).toBe('string');
    expect(result.trim()).toEqual(result);
  });

  test('Generated type is not an unexpected type', () => {
    const result = gearboxService.generateType();
    const unexpectedTypes = ['Semi-Automatic', 'CVT'];
    expect(unexpectedTypes).not.toContain(result);
  });

  test('Type is a string with valid characters', () => {
    const result = gearboxService.generateType();
    expect(/^[A-Za-z]+$/.test(result)).toBe(true);
  });

  test('Type is not an empty string', () => {
    const result = gearboxService.generateType();
    expect(result.length).toBeGreaterThan(0);
  });

  test('Model greater or equal to 6', async () => {
    const result = gearboxService.generateType();
    expect(result.length).toBeGreaterThanOrEqual(6);
  });

  test('Model less or equal to 9', async () => {
    const result = gearboxService.generateType();
    expect(result.length).toBeLessThanOrEqual(9);
  });

  test('Type is case-insensitive', () => {
    const result = gearboxService.generateType();
    const expectedTypes = ['automatic', 'MANUEL', 'eLeCtRiC'];
    expect(expectedTypes.map(type => type.toLowerCase())).toContain(result.toLowerCase());
  });
});

/* ---------------------------------------- generateGear ---------------------------------------- */
describe('generateGear', () => {

  test('Gear is a number', () => {
    const result = gearboxService.generateGear();
    expect(typeof result).toBe('number');
  });

  test('Gear is an integer', () => {
    const capacity = gearboxService.generateGear();
    expect(Number.isInteger(capacity)).toBe(true);
  });

  test('Gear is an integer', () => {
    const result = gearboxService.generateGear();
    expect(result % 1).toBe(0);
  });

  test('Gear is a positive number', () => {
    const result = gearboxService.generateGear();
    expect(result).toBeGreaterThan(0);
  });

  test('Gear is not a floating-point number', () => {
    const result = gearboxService.generateGear();
    expect(result % 1).toBe(0);
  });

  test('Type is not null or undefined', () => {
    const result = gearboxService.generateGear();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });

  test('Gear is less than 8 upper boundary', () => {
    const result = gearboxService.generateGear();
    expect(result).not.toBe(8);
    expect(result).toBeLessThan(8);
  });

  test('Gear greater than 3 lower boundary', () => {
    const result = gearboxService.generateGear();
    expect(result).toBeGreaterThan(3);
    expect(result).not.toBe(3);
  });

  test('Valid range and valid upper and lower boundaries', () => {
    const gears = [4, 5, 6, 7]
    const result = gearboxService.generateGear();
    expect(gears).toContain(result)
  });
});

/* ---------------------------------------- generateDriveTrain ---------------------------------------- */
describe('generateDriveTrain', () => {

  test('Drive train expected values', () => {
    const result = gearboxService.generateDriveTrain();
    const expectedTypes = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
    expect(expectedTypes).toContain(result);
  });

  test('Drive train is not null or undefined', () => {
    const result = gearboxService.generateDriveTrain();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });

  test('Drive train is a string with correct length', () => {
    const result = gearboxService.generateDriveTrain();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('Drive train has valid casing', () => {
    const result = gearboxService.generateDriveTrain();
    expect(result).toMatch(/^(4WD|AWD|Front wheel drive|Rear wheel drive)$/);
  });

  test('Drive train is a string with no leading or trailing whitespaces', () => {
    const result = gearboxService.generateDriveTrain();
    expect(result.trim()).toEqual(result);
  });

  test('Drive train is not an unexpected type', () => {
    const result = gearboxService.generateDriveTrain();
    const unexpectedTypes = ['Semi-Automatic', 'CVT'];
    expect(unexpectedTypes).not.toContain(result);
  });

  test('Dive train is a string with valid characters (alphanumeric)', () => {
    const result = gearboxService.generateDriveTrain();
    expect(/^[A-Za-z0-9\s]+$/.test(result)).toBe(true);
  });

  test('Model greater or equal to 3', async () => {
    const result = gearboxService.generateDriveTrain();
    expect(result.length).toBeGreaterThanOrEqual(3);
  });

  test('Model less or equal to 7', async () => {
    const result = gearboxService.generateDriveTrain();
    expect(result.length).toBeLessThanOrEqual(17);
  });
});

/* ---------------------------------------- generateGearbox ---------------------------------------- */
describe('generateGearbox', () => {
  //Ville ikke Mocke Gearbox eller generateGearbox her? 
  
  const mockType = ['Automatic', 'Manuel', 'Electric'];
  const mockGear = [4, 5, 6, 7];
  const mockDriveTrain = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
  let gearbox: Gearbox;
  
  beforeEach(()=>{
     gearbox = gearboxService.generateGearbox();
  });

  test('Gearbox instanceOf Gearbox', () => {
    expect(gearbox).toBeInstanceOf(Gearbox);
  });

  test('Gearbox correct type', () => {
    expect(mockType).toContain(gearbox.getType())    
  });

  test('Gearbox correct gear', () => {
    expect(mockGear).toContain(gearbox.getGears());
  });

  test('Gearbox correct driveTrain', () => {
    expect(mockDriveTrain).toContain(gearbox.getDriveTrain());
  });

  test('Gearbox has id', () => {
    expect(gearbox.getGearboxId()).toBeDefined();
    expect(gearbox.getGearboxId()).toBe(-1);
  });
});
