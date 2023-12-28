import { faker } from '@faker-js/faker';
import * as chassisService from '../../src/Services/chassisService'

let color: string;
let wheels: number;
let capacity: any;

const expectedColors = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown',
  'Gray', 'Teal', 'Black', 'White'
];
const expectedCapacity = [2, 5]
const expectedWheels = 4;
const excludedColors = ['Magenta', 'Cyan', 'Lime'];

const dataProvider = expectedColors.map((color) => ({
  color,
  capacity: expectedCapacity[faker.number.int({ min: 0, max: expectedCapacity.length - 1 })],
  wheels: expectedWheels
}));

/* ---------------------------------------- generateColor ---------------------------------------- */
describe('generateColor', () => {

  beforeEach(() => {
    color = chassisService.generateColor();
  });

  test('Color is expected from list', () => {
    expect(expectedColors).toContain(color);
  });

  test('Color is a string', () => {
    expect(typeof color).toBe('string');
  });

  test('Color is not an empty string', () => {
    expect(color).not.toBe('');
  });

  test('Color is a string with the correct format', () => {
    expect(/^[A-Z][a-z]+$/.test(color)).toBe(true);
  });

  test('Color is not null or undefined', () => {
    expect(color).not.toBeNull();
    expect(color).not.toBeUndefined();
  });

  test('Color is not in the list of excluded colors', () => {
    expect(excludedColors.includes(color)).toBe(false);
  });

  test('Color has a valid length', () => {
    expect(color.length).toBeGreaterThanOrEqual(3);
    expect(color.length).toBeLessThanOrEqual(6);
  });

  test('Color starts with an uppercase letter', () => {
    const firstLetter = color.charAt(0);
    expect(firstLetter).toEqual(color.charAt(0).toUpperCase());
  });

  test('Color contains only alphabetic characters', () => {
    expect(/^[a-zA-Z]+$/.test(color)).toBe(true);
  });
});

/* ---------------------------------------- generateCapacity ---------------------------------------- */
//FLERE TEST
describe('generateCapacity', () => {
  const capacities = [{ door: 2, expected: 5 }, { door: 5, expected: 5 }, { door: 1, expected: 5 }, { door: 3, expected: 2 },
    { door: 6, expected: 5 }, { door: 4, expected: 5 }];

  test.each(capacities)('Capacity is 2 or 5', ({ door, expected }) => {
    const result = chassisService.generateCapacity(door);
    expect(result).toBe(expected);
  });

  test.each(capacities)('Capacity is 2 or 5', ({ door, expected }) => {
    const result = chassisService.generateCapacity(door);
    expect(result).toBeLessThanOrEqual(expected);
  });

  beforeEach(()=>{
    const choices = [3, 5]
    capacity = chassisService.generateCapacity(choices[faker.number.int({ min: 0, max: choices.length - 1 })])
  });

  test('Capacity is 2 or 5', () => {
    expect(expectedCapacity).toContain(capacity);
  });

  test('Capacity is a number', () => {
    expect(typeof capacity).toBe('number');
  });

  test('Capacity is an integer', () => {
    expect(capacity % 1).toBe(0);
  });

  test('Capacity is not undefined & not null', () => {
    expect(capacity).not.toBeUndefined();
    expect(capacity).not.toBeNull();
  });

  test('Capacity has a valid range', () => {
    expect(capacity).toBeGreaterThan(1);
    expect(capacity).toBeLessThanOrEqual(5);
  });

  test('Capacity is an integer', () => {
    expect(Number.isInteger(capacity)).toBe(true);
  });

  test('Capacity is a positive number', () => {
    expect(capacity).toBeGreaterThan(0);
  });

  test('Capacity is less than 6 upper boundary', () => {
    expect(capacity).not.toBe(6);
    expect(capacity).toBeLessThan(6);
  });

  test('Capacity greater than 1 lower boundary', () => {
    expect(capacity).toBeGreaterThan(1);
    expect(capacity).not.toBe(1);
  });
});


/* ---------------------------------------- generateWheel ---------------------------------------- */

//FLERE TEST
describe('generateWheel', () => {

  beforeEach(() => {
    wheels = chassisService.generateWheel();
  });

  test('Wheel number always 4', () => {
    expect(wheels).toBe(4);
  });

  test('Wheel number is a number', () => {
    expect(typeof wheels).toBe('number');
  });

  test('Gear is an integer', () => {
    expect(Number.isInteger(wheels)).toBe(true);
  });

  test('Wheels is not a floating-point number', () => {
    expect(wheels % 1).toBe(0);
  });

  test('Wheels is not undefined & not null', () => {
    expect(wheels).not.toBeUndefined();
    expect(wheels).not.toBeNull();
  });

  test('Wheels number is positive', () => {
    expect(wheels).toBeGreaterThan(0);
  });

  test('Wheels is less than 5 upper boundary', () => {
    expect(wheels).not.toBe(5);
    expect(wheels).toBeLessThan(5);
  });

  test('Wheels greater than 3 lower boundary', () => {
    expect(wheels).toBeGreaterThan(3);
    expect(wheels).not.toBe(3);
  });
});
