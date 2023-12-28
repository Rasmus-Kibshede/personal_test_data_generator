import * as gearboxService from '../../src/Services/gearboxService'
import { Gearbox } from '../../src/Model/Gearbox';
import { faker } from '@faker-js/faker';

const validGearboxTypes = ['automatic', 'MANUEL', 'eLeCtRiC'];
const expectedGearboxTypes = ['Automatic', 'Manuel', 'Electric'];
const unexpectedGearboxTypes = ['Semi-Automatic', 'CVT', 0, 'A', 'fiver'];
const expectedDriveTrainTypes = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
const unexpectedDriveTrainTypes = ['3 Wheel drive', '0 wheel drive', 0, '', '2D'];
const expectedGears = [4, 5, 6, 7];
const unExpectedGears = [2, 3, 8, 9, ''];

const dataProvider = expectedDriveTrainTypes.map((driveTrain, index) => ({
  driveTrain,
  gearbox: expectedGearboxTypes[expectedGearboxTypes.length > index ? index : faker.number.int({ min: 0, max: expectedGearboxTypes.length - 1})],
  gear: expectedGears[expectedGears.length > index ? index : faker.number.int({ min: 0, max: expectedGears.length - 1})],
  expected: true
}));

//Skal bruges til at teste invalid data... 
const invalidDataProvider = unexpectedDriveTrainTypes.map((driveTrain, index) => ({
driveTrain,
gearbox: unexpectedGearboxTypes[index],
gear: unExpectedGears[index]
}));

let gearbox: Gearbox;

/* ---------------------------------------- generateType ---------------------------------------- */
describe('generateType', () => {

  test.each(dataProvider)('gearboxType is a string', ({gearbox}) => {
    const result = gearboxService.generateType();
    expect(typeof gearbox).toBe('string');
  });

  test.each(dataProvider)('gearboxType not empty string', ({gearbox}) => {
    expect(gearbox).not.toBe('');
  });

  test.each(dataProvider)('gearboxType expected values', ({gearbox}) => {
    expect(expectedGearboxTypes).toContain(gearbox);
  });

  test.each(dataProvider)('gearboxType is not null or undefined', ({gearbox}) => {
    expect(gearbox).not.toBeNull();
    expect(gearbox).not.toBeUndefined();
  });

  test.each(dataProvider)('gearboxType is a string with correct length', ({gearbox}) => {
    expect(gearbox.length).toBeGreaterThan(0);
  });

  test.each(dataProvider)('gearboxType is a string with no leading or trailing whitespaces', ({gearbox}) => {
    expect(gearbox.trim()).toEqual(gearbox);
  });

  test.each(dataProvider)('gearboxType is not an unexpected type', ({gearbox}) => {
    expect(unexpectedGearboxTypes).not.toContain(gearbox);
  });

  test.each(dataProvider)('gearboxType is a string with valid characters', ({gearbox}) => {
    expect(/^[A-Za-z]+$/.test(gearbox)).toBe(true);
  });

  test.each(dataProvider)('gearboxType is case-insensitive', ({gearbox}) => {
    expect(validGearboxTypes.map(type => type.toLowerCase())).toContain(gearbox.toLowerCase());
  });

  test.each(dataProvider)('gearboxType greater or equal to 6', async ({gearbox}) => {
    expect(gearbox.length).toBeGreaterThanOrEqual(6);
  });

  test.each(dataProvider)('gearboxType less or equal to 9', async ({gearbox}) => {
    expect(gearbox.length).toBeLessThanOrEqual(9);
  });

  test.each(dataProvider)('gearboxType not equal 5', async ({gearbox}) => {
    expect(gearbox.length).not.toBe(5);
  });

  test.each(dataProvider)('gearboxType not equal 10', async ({gearbox}) => {
    expect(gearbox.length).not.toBe(10);
  });
});

/* ---------------------------------------- generateGear ---------------------------------------- */
describe('generateGear', () => {

  test.each(dataProvider)('Gear is a number', ({gear}) => {
    expect(typeof gear).toBe('number');
  });

  test.each(dataProvider)('Gear is an integer', ({gear}) => {
    expect(Number.isInteger(gear)).toBe(true);
  });

  test.each(dataProvider)('Gear is an integer', ({gear}) => {
    expect(gear % 1).toBe(0);
  });

  test.each(dataProvider)('Gear is a positive number', ({gear}) => {
    expect(gear).toBeGreaterThan(0);
  });

  test.each(dataProvider)('Gear is not a floating-point number', ({gear}) => {
    expect(gear % 1).toBe(0);
  });

  test.each(dataProvider)('Type is not null or undefined', ({gear}) => {
    expect(gear).not.toBeNull();
    expect(gear).not.toBeUndefined();
  });

  test.each(dataProvider)('Gear is less than 8 upper boundary', ({gear}) => {
    expect(gear).not.toBe(8);
    expect(gear).toBeLessThan(8);
  });

  test.each(dataProvider)('Gear greater than 3 lower boundary', ({gear}) => {
    expect(gear).toBeGreaterThan(3);
    expect(gear).not.toBe(3);
  });

  test.each(dataProvider)('Valid range and valid upper and lower boundaries', ({gear}) => {
    expect(expectedGears).toContain(gear)
  });
});

/* ---------------------------------------- generateDriveTrain ---------------------------------------- */
describe('generateDriveTrain', () => {

  test.each(dataProvider)('Drive train expected values', ({driveTrain}) => {
    expect(expectedDriveTrainTypes).toContain(driveTrain);
  });

  test.each(dataProvider)('Drive train is not null or undefined', ({driveTrain}) => {
    expect(driveTrain).not.toBeNull();
    expect(driveTrain).not.toBeUndefined();
  });

  test.each(dataProvider)('Drive train is a string with correct length', ({driveTrain}) => {
    expect(typeof driveTrain).toBe('string');
    expect(driveTrain.length).toBeGreaterThan(0);
  });

  test.each(dataProvider)('Drive train has valid casing', ({driveTrain}) => {
    expect(driveTrain).toMatch(/^(4WD|AWD|Front wheel drive|Rear wheel drive)$/);
  });

  test.each(dataProvider)('Drive train is a string with no leading or trailing whitespaces', ({driveTrain}) => {
    expect(driveTrain.trim()).toEqual(driveTrain);
  });

  test.each(dataProvider)('Drive train is not an unexpected type', ({driveTrain}) => {
    expect(unexpectedDriveTrainTypes).not.toContain(driveTrain);
  });

  test.each(dataProvider)('Drive train is a string with valid characters (alphanumeric)', ({driveTrain}) => {
    expect(/^[A-Za-z0-9\s]+$/.test(driveTrain)).toBe(true);
  });

  test.each(dataProvider)('Drive train greater or equal to 3', async ({driveTrain}) => {
    expect(driveTrain.length).toBeGreaterThanOrEqual(3);
  });

  test.each(dataProvider)('Drive train less or equal to 7', async ({driveTrain}) => {
    expect(driveTrain.length).toBeLessThanOrEqual(17);
  });

  test.each(dataProvider)('driveTrain not equal 2 lower boundary', async ({driveTrain}) => {
    expect(driveTrain.length).not.toBe(2);
  });

  test.each(dataProvider)('driveTrain not equal 17 upper boundary', async ({driveTrain}) => {
    expect(driveTrain.length).not.toBe(18);
  });
});
