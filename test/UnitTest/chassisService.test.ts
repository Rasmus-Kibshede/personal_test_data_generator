import { faker } from '@faker-js/faker';

const expectedColors = [
    'Red','Blue','Green','Yellow','Purple','Orange','Pink','Brown',
    'Gray','Teal','Black','White'
];
const expectedCapacity = [2, 5]
const expectedWheels = 4;
const excludedColors = ['Magenta', 'Cyan', 'Lime'];

const dataProvider = expectedColors.map((color) => ({
    color,
    capacity: expectedCapacity[faker.number.int({ min: 0, max: expectedCapacity.length -1 })],
    wheels: expectedWheels
  }));

/* ---------------------------------------- generateColor ---------------------------------------- */
describe('generateColor', () => {

    test.each(dataProvider)('Color is expected from list', ({color}) => {
        expect(expectedColors).toContain(color);
    });

    test.each(dataProvider)('Color is a string', ({color}) => {
        expect(typeof color).toBe('string');
    });

    test.each(dataProvider)('Color is not an empty string', ({color}) => {
        expect(color).not.toBe('');
    });

    test.each(dataProvider)('Color is a string with the correct format', ({color}) => {
        expect(/^[A-Z][a-z]+$/.test(color)).toBe(true);
    });

    test.each(dataProvider)('Color is not null or undefined', ({color}) => {
        expect(color).not.toBeNull();
        expect(color).not.toBeUndefined();
    });

    test.each(dataProvider)('Color is not in the list of excluded colors', ({color}) => {
        expect(excludedColors.includes(color)).toBe(false);
    });

    test.each(dataProvider)('Color has a valid length', ({color}) => {
        expect(color.length).toBeGreaterThanOrEqual(3);
        expect(color.length).toBeLessThanOrEqual(6);
    });

    test.each(dataProvider)('Color starts with an uppercase letter', ({color}) => {
        const firstLetter = color.charAt(0);
        expect(firstLetter).toEqual(color.charAt(0).toUpperCase());
    });

    test.each(dataProvider)('Color contains only alphabetic characters', ({color}) => {
        expect(/^[a-zA-Z]+$/.test(color)).toBe(true);
    });
});

/* ---------------------------------------- generateCapacity ---------------------------------------- */
//FLERE TEST
describe('generateCapacity', () => {
    test.each(dataProvider)('Capacity is 2 or 5', ({capacity}) => {
        expect(expectedCapacity).toContain(capacity);
    });

    test.each(dataProvider)('Capacity is a number', ({capacity}) => {
        expect(typeof capacity).toBe('number');
    });

    test.each(dataProvider)('Capacity is an integer', ({capacity}) => {
        expect(capacity % 1).toBe(0);
      });

    test.each(dataProvider)('Capacity is not undefined & not null', ({capacity}) => {
        expect(capacity).not.toBeUndefined();
        expect(capacity).not.toBeNull();
    });

    test.each(dataProvider)('Capacity has a valid range', ({capacity}) => {
        expect(capacity).toBeGreaterThan(1);
        expect(capacity).toBeLessThanOrEqual(5);
    });

    test.each(dataProvider)('Capacity is an integer', ({capacity}) => {
        expect(Number.isInteger(capacity)).toBe(true);
      });

      test.each(dataProvider)('Capacity is a positive number', ({capacity}) => {
        expect(capacity).toBeGreaterThan(0);
      });

      test.each(dataProvider)('Capacity is less than 6 upper boundary', ({capacity}) => {
        expect(capacity).not.toBe(6);
        expect(capacity).toBeLessThan(6);
      });
    
      test.each(dataProvider)('Capacity greater than 1 lower boundary', ({capacity}) => {
        expect(capacity).toBeGreaterThan(1);
        expect(capacity).not.toBe(1);
      });
});


/* ---------------------------------------- generateWheel ---------------------------------------- */

//FLERE TEST
describe('generateWheel', () => {
    test.each(dataProvider)('Wheel number always 4', ({wheels}) => {
        expect(wheels).toBe(4);
      });
    
      test.each(dataProvider)('Wheel number is a number', ({wheels}) => {
        expect(typeof wheels).toBe('number');
      });

      test.each(dataProvider)('Gear is an integer', ({wheels}) => {
        expect(Number.isInteger(wheels)).toBe(true);
      });

      test.each(dataProvider)('Wheels is not a floating-point number', ({wheels}) => {
        expect(wheels % 1).toBe(0);
      });
    
      test.each(dataProvider)('Wheels is not undefined & not null', ({wheels}) => {
        expect(wheels).not.toBeUndefined();
        expect(wheels).not.toBeNull();
    });
    
    test.each(dataProvider)('Wheels number is positive', ({wheels}) => {
        expect(wheels).toBeGreaterThan(0);
      });

      test.each(dataProvider)('Wheels is less than 5 upper boundary', ({wheels}) => {
        expect(wheels).not.toBe(5);
        expect(wheels).toBeLessThan(5);
      });
    
      test.each(dataProvider)('Wheels greater than 3 lower boundary', ({wheels}) => {
        expect(wheels).toBeGreaterThan(3);
        expect(wheels).not.toBe(3);
      });
});
