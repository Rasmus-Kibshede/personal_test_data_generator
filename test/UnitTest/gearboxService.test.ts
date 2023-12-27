import * as gearboxService from '../../src/Services/gearboxService'
import { Gearbox } from '../../src/Model/Gearbox';

const validGearboxTypes = ['automatic', 'MANUEL', 'eLeCtRiC'];
const expectedGearboxTypes = ['Automatic', 'Manuel', 'Electric'];
const unexpectedGearboxTypes = ['Semi-Automatic', 'CVT'];

const shortestGearboxType = expectedGearboxTypes.reduce(function (a, b) {
  return a.length <= b.length ? a : b;
});
const longestGearboxType = expectedGearboxTypes.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});

const expectedDriveTrainTypes = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
const unexpectedDriveTrainTypes = ['3 Wheel drive', '0 wheel drive'];

const shortestDriveTrainType = expectedDriveTrainTypes.reduce(function (a, b) {
  return a.length <= b.length ? a : b;
});
const longestDriveTrainType = expectedDriveTrainTypes.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});

const expectedGears = [4, 5, 6, 7];

let gearbox: Gearbox;
let gearboxType: string;
let driveTrain: string;
let gears: number;

/* ---------------------------------------- generateType ---------------------------------------- */
describe('generateType', () => {

  beforeEach(() => {
    gearboxType = gearboxService.generateType();
  });

  test('gearboxType is a string', () => {
    expect(typeof gearboxType).toBe('string');
  });

  test('gearboxType not empty string', async () => {
    expect(gearboxType).not.toBe('');
  });

  test('gearboxType expected values', () => {
    expect(expectedGearboxTypes).toContain(gearboxType);
  });

  test('gearboxType is not null or undefined', () => {
    expect(gearboxType).not.toBeNull();
    expect(gearboxType).not.toBeUndefined();
  });

  test('gearboxType is a valid type', () => {
    expect(expectedGearboxTypes.includes(gearboxType)).toBe(true);
  });

  test('gearboxType is a string with correct length', () => {
    expect(gearboxType.length).toBeGreaterThan(0);
  });

  test('gearboxType is a string with no leading or trailing whitespaces', () => {
    expect(gearboxType.trim()).toEqual(gearboxType);
  });

  test('gearboxType is not an unexpected type', () => {
    expect(unexpectedGearboxTypes).not.toContain(gearboxType);
  });

  test('gearboxType is a string with valid characters', () => {
    expect(/^[A-Za-z]+$/.test(gearboxType)).toBe(true);
  });

  test('gearboxType is case-insensitive', () => {
    expect(validGearboxTypes.map(type => type.toLowerCase())).toContain(gearboxType.toLowerCase());
  });

  test('gearboxType greater or equal to 6', async () => {
    expect(shortestGearboxType.length).toBeGreaterThanOrEqual(6);
  });

  test('gearboxType less or equal to 9', async () => {
    expect(longestGearboxType.length).toBeLessThanOrEqual(9);
  });

  test('gearboxType not equal 5', async () => {
    expect(shortestGearboxType.length).not.toBe(5);
  });

  test('gearboxType not equal 10', async () => {
    expect(longestGearboxType.length).not.toBe(10);
  });
});

/* ---------------------------------------- generateGear ---------------------------------------- */
describe('generateGear', () => {

  beforeEach(() => {
    gears = gearboxService.generateGear();
  });

  test('Gear is a number', () => {
    expect(typeof gears).toBe('number');
  });

  test('Gear is an integer', () => {
    expect(Number.isInteger(gears)).toBe(true);
  });

  test('Gear is an integer', () => {
    expect(gears % 1).toBe(0);
  });

  test('Gear is a positive number', () => {
    expect(gears).toBeGreaterThan(0);
  });

  test('Gear is not a floating-point number', () => {
    expect(gears % 1).toBe(0);
  });

  test('Type is not null or undefined', () => {
    expect(gears).not.toBeNull();
    expect(gears).not.toBeUndefined();
  });

  test('Gear is less than 8 upper boundary', () => {
    expect(gears).not.toBe(8);
    expect(gears).toBeLessThan(8);
  });

  test('Gear greater than 3 lower boundary', () => {
    expect(gears).toBeGreaterThan(3);
    expect(gears).not.toBe(3);
  });

  test('Valid range and valid upper and lower boundaries', () => {
    expect(expectedGears).toContain(gears)
  });
});

/* ---------------------------------------- generateDriveTrain ---------------------------------------- */
describe('generateDriveTrain', () => {

  beforeEach(() => {
    driveTrain = gearboxService.generateDriveTrain();
  });

  test('Drive train expected values', () => {
    expect(expectedDriveTrainTypes).toContain(driveTrain);
  });

  test('Drive train is not null or undefined', () => {
    expect(driveTrain).not.toBeNull();
    expect(driveTrain).not.toBeUndefined();
  });

  test('Drive train is a string with correct length', () => {
    expect(typeof driveTrain).toBe('string');
    expect(driveTrain.length).toBeGreaterThan(0);
  });

  test('Drive train has valid casing', () => {
    expect(driveTrain).toMatch(/^(4WD|AWD|Front wheel drive|Rear wheel drive)$/);
  });

  test('Drive train is a string with no leading or trailing whitespaces', () => {
    expect(driveTrain.trim()).toEqual(driveTrain);
  });

  test('Drive train is not an unexpected type', () => {
    expect(unexpectedDriveTrainTypes).not.toContain(driveTrain);
  });

  test('Drive train is a string with valid characters (alphanumeric)', () => {
    expect(/^[A-Za-z0-9\s]+$/.test(driveTrain)).toBe(true);
  });

  test('Drive train greater or equal to 3', async () => {
    expect(shortestDriveTrainType.length).toBeGreaterThanOrEqual(3);
  });

  test('Drive train less or equal to 7', async () => {
    expect(longestDriveTrainType.length).toBeLessThanOrEqual(17);
  });

  test('driveTrain not equal 2 lower boundary', async () => {
    expect(shortestDriveTrainType.length).not.toBe(2);
  });

  test('driveTrain not equal 17 upper boundary', async () => {
    expect(longestDriveTrainType.length).not.toBe(18);
  });
});

/* ---------------------------------------- generateGearbox ---------------------------------------- */
describe('generateGearbox', () => {
  //Ville ikke Mocke Gearbox eller generateGearbox her?  
  beforeEach(() => {
    gearbox = gearboxService.generateGearbox();
  });

  test('Gearbox instanceOf Gearbox', () => {
    expect(gearbox).toBeInstanceOf(Gearbox);
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
