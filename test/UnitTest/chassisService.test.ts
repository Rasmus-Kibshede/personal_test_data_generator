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
const excludedColors = ['Magenta', 'Cyan', 'Lime'];

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

  test('Color has a valid lower length', () => {
    expect(color.length).toBeGreaterThanOrEqual(3);
  });

  test('Color has a valid upper length', () => {
    expect(color.length).toBeLessThanOrEqual(6);
  });

  test('Color not less then lower', () => {
    expect(color.length).not.toBeLessThan(3);
  });

  test('Color not greater then upper', () => {
    expect(color.length).not.toBeGreaterThan(6);
  });

  test('Color not 0', () => {
    expect(color.length).not.toBe(0);
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

  beforeEach(() => {
    const choices = [3, 5]
    capacity = chassisService.generateCapacity(choices[faker.number.int({ min: 0, max: choices.length - 1 })])
  });

  const capacities = [{ door: 2, expected: 5 }, { door: 5, expected: 5 }, { door: 1, expected: 5 }, { door: 3, expected: 2 },
  { door: 6, expected: 5 }, { door: 4, expected: 5 }];

  test.each(capacities)('Capacity is 2 or 5', ({ door, expected }) => {
    const result = chassisService.generateCapacity(door);
    expect(result).toBe(expected);
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

  test('Capacity is not undefined', () => {
    expect(capacity).toBeDefined()
  });

  test('Capacity is not null', () => {
    expect(capacity).not.toBeNull();
  });

  test('Capacity has a valid range', () => {
    expect(capacity).toBeGreaterThanOrEqual(2);

  });

  test('Capacity has a valid range', () => {
    expect(capacity).toBeLessThanOrEqual(5);
  });

  test('Capacity is an integer', () => {
    expect(Number.isInteger(capacity)).toBe(true);
  });

  test('Capacity is a positive number', () => {
    expect(capacity).toBeGreaterThan(0);
  });

  test('Capacity is not 6 upper boundary', () => {
    expect(capacity).not.toBe(6);
  });

  test('Capacity is less than 6 upper boundary', () => {
    expect(capacity).toBeLessThan(6);
  });

  test('Capacity greater than 1 lower boundary', () => {
    expect(capacity).toBeGreaterThan(1);
  });

  test('Capacity is not 1 lower boundary', () => {
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

  test('Wheels is not undefined', () => {
    expect(wheels).toBeDefined()
  });

  test('Wheels is not null', () => {
    expect(wheels).not.toBeNull();
  });

  test('Wheels number is positive', () => {
    expect(wheels).toBeGreaterThan(0);
  });

  test('Wheels is less than 5 upper boundary', () => {
    expect(wheels).toBeLessThan(5);
  });

  test('Wheels not 5 upper boundary', () => {
    expect(wheels).not.toBe(5);
  });

  test('Wheels not 3 lower boundary', () => {
    expect(wheels).not.toBe(3);
  });

  test('Wheels greater than 3 lower boundary', () => {
    expect(wheels).toBeGreaterThan(3);
  });
});
