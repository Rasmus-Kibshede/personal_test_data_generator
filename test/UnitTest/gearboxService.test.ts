import * as gearboxService from '../../src/Services/gearboxService'

let gearboxType: string
let gear: number;
let driveTrain: string

const validGearboxTypes = ['automatic', 'MANUEL', 'eLeCtRiC'];
const expectedGearboxTypes = ['Automatic', 'Manuel', 'Electric'];
const expectedDriveTrainTypes = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
const expectedGears = [4, 5, 6, 7];

const unexpectedGearboxTypes = ['Semi-Automatic', 'CVT', 0, 'A', 'fiver'];
const unexpectedDriveTrainTypes = ['3 Wheel drive', '0 wheel drive', 0, '', '2D'];


/* ---------------------------------------- generateType ---------------------------------------- */
describe('generateType', () => {

beforeEach(()=>{
  gearboxType = gearboxService.generateType();
})

  test('gearboxType is a string', () => {
    const result = gearboxService.generateType();
    expect(typeof gearboxType).toBe('string');
  });

  test('gearboxType not empty string', () => {
    expect(gearboxType).not.toBe('');
  });

  test('gearboxType expected values', () => {
    expect(expectedGearboxTypes).toContain(gearboxType);
  });

  test('gearboxType is not undefined', () => {
    expect(gearboxType).not.toBeUndefined();
  });

  test('gearboxType is not null', () => {
    expect(gearboxType).not.toBeNull();
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
    expect(gearboxType.length).toBeGreaterThanOrEqual(6);
  });

  test('gearboxType less or equal to 9', async () => {
    expect(gearboxType.length).toBeLessThanOrEqual(9);
  });

  test('gearboxType not equal 5', async () => {
    expect(gearboxType.length).not.toBe(5);
  });

  test('gearboxType not equal 10', async () => {
    expect(gearboxType.length).not.toBe(10);
  });
});

/* ---------------------------------------- generateGear ---------------------------------------- */
describe('generateGear', () => {

  beforeEach(()=>{
    gear = gearboxService.generateGear();
  });

  test('Gear is a number', () => {
    expect(typeof gear).toBe('number');
  });

  test('Gear is an integer', () => {
    expect(Number.isInteger(gear)).toBe(true);
  });

  test('Gear is an integer', () => {
    expect(gear % 1).toBe(0);
  });

  test('Gear is a positive number', () => {
    expect(gear).toBeGreaterThan(0);
  });

  test('Gear is not a floating-point number', () => {
    expect(gear % 1).toBe(0);
  });

  test('Type is not undefined', () => {
    expect(gear).not.toBeUndefined();
  });

  test('Type is not null', () => {
    expect(gear).not.toBeNull();
  });

  test('Gear is less than 8 upper boundary', () => {
    expect(gear).not.toBe(8);
    expect(gear).toBeLessThan(8);
  });

  test('Gear greater than 3 lower boundary', () => {
    expect(gear).toBeGreaterThan(3);
    expect(gear).not.toBe(3);
  });

  test('Valid range and valid upper and lower boundaries', () => {
    expect(expectedGears).toContain(gear)
  });
});

/* ---------------------------------------- generateDriveTrain ---------------------------------------- */
describe('generateDriveTrain', () => {

  beforeEach(()=>{
    driveTrain = gearboxService.generateDriveTrain();
  });

  test('Drive train expected values', () => {
    expect(expectedDriveTrainTypes).toContain(driveTrain);
  });

  test('Drive train is not undefined', () => {
    expect(driveTrain).not.toBeUndefined();
  });

  test('Drive train is not null', () => {
    expect(driveTrain).not.toBeNull();
  });

  test('Drive train is a string', () => {
    expect(typeof driveTrain).toBe('string');
  });

  test('Drive train correct length', () => {
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
    expect(driveTrain.length).toBeGreaterThanOrEqual(3);
  });

  test('Drive train less or equal to 7', async () => {
    expect(driveTrain.length).toBeLessThanOrEqual(17);
  });

  test('driveTrain not equal 2 lower boundary', async () => {
    expect(driveTrain.length).not.toBe(2);
  });

  test('driveTrain not equal 17 upper boundary', async () => {
    expect(driveTrain.length).not.toBe(18);
  });
});
